const express = require("express");

const app = express();

app.get("/hello/:userID/:name/:pass", (req, res) => {
    console.log(req.params);
    res.send({firstName: "John", lastName: "Doe"});
});

app.use("/", (req, res) => {
    res.send("Home !");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});