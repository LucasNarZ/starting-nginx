const express = require("express");
const app = express();

const port = 3000;
app.use(express.json());

app.get("/api", (req, res) => {
    res.send("GET requisition accepted");
})

app.listen(port, () => {
    console.log("Server running at port " + port);
})