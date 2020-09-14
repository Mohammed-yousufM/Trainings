const Joi = require("joi");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
const fileNamex = path.join(__dirname, "index.html");
const movies = [
  { id: 1, name: "Terminator", genre: "Action", rating: 7 },
  { id: 2, name: "Inception", genre: "Sci-Fi", rating: 9.5 },
  { id: 3, name: "Sanctum", genre: "Adventure", rating: 7.5 },
];
app.get("/vidly", (req, res) => {
    res.sendFile(fileNamex);
  // res.json(movies);
});

app.post("/vidly", (req, res) => {});

const port = process.env.port || 3000;
app.listen(3000, () => console.log(`Server is listening on port ${port}...`));
