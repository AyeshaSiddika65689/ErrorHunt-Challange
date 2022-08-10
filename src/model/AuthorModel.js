const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/Library');

const url = "mongodb+srv://ayeshasiddika:ayesha321@cluster0.2k9xok7.mongodb.net/library";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); // part 2

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  title: String,
  image: String,
  about: String,
});

const authordata = mongoose.model("authordata", AuthorSchema);

module.exports = authordata;
