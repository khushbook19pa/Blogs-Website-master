const Port =process.env.PORT || 3000
const express = require("express");
const mongoose = require("mongoose");
const Article = require("./Modal/articles");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override");
const app = express();
mongoose.connect(
  "mongodb+srv://rishabh:admin@cluster0.ktzz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(Port);
