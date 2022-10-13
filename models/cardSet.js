const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    cards: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("CardSet", cardSetSchema);
