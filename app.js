import express from "express";

const app = express();

const port = 4500;

app.get("/getStudentBio", (req, res) => {
  res.send({
    slackUsername: "Omas Ajiri",
    backend: true,
    age: 30,
    bio: "My name is Omas, am 307 years old and I love technology.",
  });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
