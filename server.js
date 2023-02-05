const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('build'))

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(3001, () => {
    console.log("listening on port 3001")
});
