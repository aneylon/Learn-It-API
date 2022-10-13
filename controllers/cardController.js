const mongoose = require("mongoose");
const Card = require("../models/card");

const getCards = async (req, res) => {
  const cards = await Card.find({}).sort({ createdAt: -1 });
  res.status(200).json({ cards });
};

const getCard = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: `Not a valid Id : ${id}` });
  const card = await Card.findById(id);
  if (!card)
    return res.status(400).json({ error: `No document for id : ${id}` });
  res.status(200).json({ card });
};

const postCard = async (req, res) => {
  console.log(req.body);

  try {
    const card = await Card.create({ ...req.body });
    res.status(200).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const patchCard = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Not a valid Id" });
  const card = await Card.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!card) return res.status(400).json({ error: "No such Id" });
  const updatedCard = await Card.findById(id);
  res.status(200).json({ card, updatedCard });
};

const deleteCard = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Not a valid Id" });
  const card = await Card.findOneAndDelete({ _id: id });
  if (!card) return res.status(400).json({ error: "No such Id" });
  res.status(200).json({ card });
};

module.exports = {
  getCards,
  getCard,
  postCard,
  patchCard,
  deleteCard,
};
