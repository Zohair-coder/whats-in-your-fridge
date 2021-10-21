const express = require('express');
const cors = require("cors"); // required for passing API to React

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

app.use("/testAPI", function (req, res) {
  res.send("API is working properly");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
