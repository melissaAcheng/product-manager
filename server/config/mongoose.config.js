const mongoose = require("mongoose");
const dbName = "product_manager";

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`You are connected to the ${dbName} database`))
  .catch((err) => console.log(err));
