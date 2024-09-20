const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello from test route");
})

app.use("/hello", (req, res) => {
    console.log("Res", res.send);
    res.send("Hello from hello route");
})

app.listen(7777, () => {
    console.log("Server listening on port 7777...");
});