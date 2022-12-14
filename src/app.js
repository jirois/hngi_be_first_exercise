import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
const PORT = process.env.PORT || 4500;

app.get("/", (req, res) => {
  res.send({
    slackUsername: "AJ",
    backend: true,
    age: 30,
    bio: "My name is Omas, am 307 years old and I love technology.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
