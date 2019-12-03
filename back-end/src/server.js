const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`Api running on port ${port}!`));
