const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("/ root Route is Working");

});

app.get("/teacher",(req,res)=>{
   res.send("teacher Route is Working");
});

const cb0 = function (req, res, next) {
    console.log('CB0');
    next();
};

const cb1 = function (req, res, next) {
    console.log('CB1');
    next();
};

const cb2 = function (req, res) {
    res.send('Hello from C!');
};

app.get('/example/c', [cb0, cb1, cb2]);
                                
module.exports = app;

