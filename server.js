const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 4000;

// Serve up the index.html file
app.use(express.static(path.join(__dirname)));

app.listen(port, function() {
  console.log("Sorting app listening on " + port + "!");
});
