const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
