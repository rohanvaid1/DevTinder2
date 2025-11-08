const express = require("express");
const app = express();

const isAdminAuth =  (req, res, next) => {
    const token = "xyzaa";
    const isAuth = token === "xyz";

    if(isAuth){
        next();
    }
    else{
        res.status(401).send("unautherized User ");
    }
};

module.exports = {
    isAdminAuth,
}