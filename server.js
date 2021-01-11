const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname + "/public");
const viewsPath = path.join(__dirname + "/template/views");
const partialPath = path.join(__dirname + "/template/components");

app.set("view engine", "hbs");
app.use(express.static(staticPath));
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index");
});


app.get("*", (req, res) => {
  res.render("404error", {
    error: "Opps!, Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
