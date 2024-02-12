const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = Schema(
  {
    STT: Boolean,
    Cod: String,
    Name: String,
    Sex: String,
    Size: Number,
    Quality: String,
    StartingPrice: Number,
    Location: String,
    Description: String,
    Column10: Boolean,
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Products", productsSchema);

module.exports = Product;
