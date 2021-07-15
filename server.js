const express = require("express");
const app = express();
const cors = require('cors')

require("./server/config/database.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())


const practice_routes = require("./server/routes/practice.route");
practice_routes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
