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
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "card",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("CardSet", cardSetSchema);
