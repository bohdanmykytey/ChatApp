let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {
  userNewUrlParser: true
});

const db = mongoose.connection;

db.om("error", console.error.bind(console, "connection error:"));
db.omce("open", () => {
  console.log("connection made");
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String
});

const messageSchema = new mongoose.Schema({
    message: String,
})

let User = mongoose.model("User", userSchema);
let message = mongoose.model('message', messageSchema)
