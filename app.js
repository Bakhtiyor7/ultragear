console.log("Starting the web server");
const http = require("http");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const TelegramBot = require("node-telegram-bot-api");
const botToken = "6926813398:AAG-WtEYtM6LXPG-KdzXivLmcfgZOMf0ccU";
const chatId = "548219471";
const bot = new TelegramBot(botToken, { polling: false });

let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session); // initializez mongodb store with express session
const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions", // saved into sessions module in MongoDB
});

//1.Opening codes
app.use(express.static("public")); // servers for HTML, CSS etc static files in public folder
app.use("/uploads", express.static(__dirname + "/uploads")); // serves for files in uploads folder (http://domain.com/uploads)
app.use(express.json()); // parses requests that have JSON body ==> makes req.body available
app.use(
  express.urlencoded({
    // makes post reqs (URL-encoded string ) available to read in the server
    extended: true, // allows rich objects like forms and etc
  })
);
app.use(
  // enables cross origin requests
  cors({
    credentials: true, // allows cookies
    origin: true, // allows reqs from different origins
  })
);
app.use(cookieParser()); // parses cookies attached to the request. makes them available via req.cookies

//2: Sessions

app.use(
  session({
    secret: process.env.SESSION_SECRET, // sign the session ID cookie
    cookie: {
      maxAge: 1000 * 60 * 30, //for 1 minutes
    },
    store: store, // store the session in MongoDB store
    resave: true, // keep the session alive
    saveUninitialized: true, //Forces a session that is "uninitialized" (i.e., new but not modified) to be saved to the store.
  })
);

// makes the member object from the session data available to all views/templates rendered during the request.
app.use(function (req, res, next) {
  res.locals.member = req.session.member;
  next();
});

//3: view
app.set("views", "views");
app.set("view engine", "ejs");

// routing codes
app.use("/brand", router_bssr);
app.use("/", router);

const server = http.createServer(app);

/** SOCKET IO BACKEND SERVER */
const io = require("socket.io")(server, {
  serveClient: false,
  origins: "*:*",
  transport: ["websocket", "xhr-polling"],
});

let online_users = 0;
io.on("connection", function (socket) {
  online_users++;
  console.log("New user, total:", online_users);

  // telegram notification
  const ipAddress = socket.request.connection.remoteAddress;
  const userAgent = socket.request.headers["user-agent"];
  const referrer = socket.handshake.headers.referer;
  bot
    .sendMessage(
      chatId,
      `- A new user connected to the website.
  - IP Address:   ${ipAddress}.
  - User Agent:   ${userAgent}.
  - Referrer:   ${referrer}`
    )
    .then(() => {
      console.log("Notification sent successfully!");
    });

  socket.emit("greetMsg", { text: "welcome" });
  io.emit("infoMsg", { total: online_users });

  socket.on("disconnect", function () {
    online_users--;
    socket.broadcast.emit("infoMsg", { total: online_users });
    console.log("client disconnected, total:", online_users);
  });

  socket.on("createMsg", function (data) {
    console.log("createMsg:", data);
    io.emit("newMsg", data);
  });
});

module.exports = server;
