const mongoose = require("mongoose");
const CardSet = require("../models/cardSet");

const getCardSets = async (req, res) => {
  const cardSets = await CardSet.find({}).sort({ createdAt: -1 });
  res.status(200).json({ cardSets });
};

const getCardSet = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: `Not a valid Id : ${id}` });
  const cardSet = await CardSet.findById(id).populate("cards");
  if (!cardSet)
    return res.status(400).json({ error: `No document for id : ${id}` });
  res.status(200).json({ cardSet });
};

const postCardSet = async (req, res) => {
  console.log(req.body);

  try {
    const cardSet = await CardSet.create({ ...req.body });
    res.status(200).json(cardSet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const patchCardSet = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Not a valid Id" });
  const cardSet = await CardSet.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!cardSet) return res.status(400).json({ error: "No such Id" });
  const updatedCardSet = await CardSet.findById(id);
  res.status(200).json({ cardSet, updatedCardSet });
};

const deleteCardSet = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Not a valid Id" });
  const cardSet = await CardSet.findOneAndDelete({ _id: id });
  if (!cardSet) return res.status(400).json({ error: "No such Id" });
  res.status(200).json({ cardSet });
};

module.exports = {
  getCardSets,
  getCardSet,
  postCardSet,
  patchCardSet,
  deleteCardSet,
};
