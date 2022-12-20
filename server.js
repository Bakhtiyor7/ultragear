const dotenv = require("dotenv");
dotenv.config(); // ESDAN CHIQARMANG !!!!!!!!!

const mongoose = require("mongoose");

let db;
const connectionString = process.env.MONGO_URL;

mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, goose) => {
    if (err) console.log("ERROR on connecting MongoDB");
    else {
      console.log("Mongodb connected successfully");
      // console.log(goose );
      const server = require("./app");

      let PORT = process.env.PORT || 3003;
      server.listen(PORT, function() {
        console.log(
          `This server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
