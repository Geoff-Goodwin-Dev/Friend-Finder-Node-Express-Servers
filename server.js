const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("App listening on PORT: http://localhost:" + PORT);
});