const http = require('http');

const mongodb = require("mongodb")

let db;
const connectionString = 
"mongodb+srv://Baxtiyor7:1XoLy3njBFmTxAmZ@cluster0.h7t2rx7.mongodb.net/Reja?retryWrites=true&w=majority"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log("ERROR connecting MongoDB");
    else {
        console.log("Mongodb connected successfully");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
let PORT = process.env.PORT || 3000;
server.listen(PORT, function() {
    console.log(`This server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }
}
);