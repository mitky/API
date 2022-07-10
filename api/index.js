require("cross-fetch/polyfill");
const express = require("express");
const fetch = require("cross-fetch");
const app = require("express")();
const bodyParser = require("body-parser");
const port = 3001;


app.get("/b/", (req, res) => {
    const data = {a: 1};
    res.json(data);
});

app.get("/a/", (req, res) => {
    const data = {as: 3};
    res.json(data);
});


const endPointCall = (req, res) => {
    console.log (req.body);

    res.json(req.body);
};


app.post("/post/", endPointCall);






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
