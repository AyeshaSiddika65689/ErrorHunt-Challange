const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser"); //Part #1 typo error no:2 //

// part1 error no:4 //
// const nav = [
//   {
//     link: "/books",
//     title: "Books",
//   },
//   {
//     link: "/authors",
//     title: "Authors",
//   },
//   {
//     link: "/addbook",
//     title: "Add Book",
//   },
//   {
//     link: "/addauthor",
//     title: "Add Author",
//   },
// ];

const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");
const homeRouter = require("./src/routes/homerouter"); //Part #1 Typo erroer no: 3 //
const booksRouter = require("./src/routes/booksroute");
const authorsRouter = require("./src/routes/authorsroute");

const app = new express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(cors()); //part #1
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

app.get("/", function (req, res) {
  res.render("index", { });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Ready on 5000"); //Part #1 Typo error no:4 
});
