const express = require("express");
// const { isAdminAuth } = require("./middlewares/auth");
const connectDB =  require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
    const user = new User(req.body);
    console.log(user);

    try{
       await user.save();
       res.status(201).send("User signed up successfully");
    } catch(err) {
       res.status(400).send("Error signing up user: " + err.message);
    }

});

connectDB()
   .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
    console.log("Server is running on port 3000");
    });
   })
   .catch((err) => {
    console.error("Database connection failed", err);
   });

