const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/product.route")(app);

const server = app.listen(port, () => console.log(`Listening on port: ${port}`));

const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: true,
  },
});

// create the connection
// create the event listeners inside the connection
io.on("connection", (socket) => {
  console.log(`new client connection on socket id: ${socket.id}`);

  socket.emit("connection");

  socket.on("added_new_product", (data) => {
    console.log("added_new_product", data);

    socket.broadcast.emit("added_product", data);
  });
});
