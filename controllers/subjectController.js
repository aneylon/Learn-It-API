const mongoose = require("mongoose");
const Subject = require("../models/subject");

const getSubjects = async (req, res) => {
  const subjects = await Subject.find({}).sort({ createdAt: -1 });
  res.status(200).json({ subjects });
};

const getSubject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: `Not a valid Id : ${id}` });
  const subject = await Subject.findById(id);
  if (!subject)
    return res.status(400).json({ error: `No document for id : ${id}` });
  res.status(200).json({ subject });
};

const postSubject = async (req, res) => {
  console.log(req.body);

  try {
    const subject = await Subject.create({ ...req.body });
    res.status(200).json(subject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const patchSubject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Not a valid Id" });
  const subject = await Subject.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!subject) return res.status(400).json({ error: "No such Id" });
  const updatedSubject = await Subject.findById(id);
  res.status(200).json({ subject, updatedSubject });
};

const deleteSubject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Not a valid Id" });
  const subject = await Subject.findOneAndDelete({ _id: id });
  if (!subject) return res.status(400).json({ error: "No such Id" });
  res.status(200).json({ subject });
};

module.exports = {
  getSubjects,
  getSubject,
  postSubject,
  patchSubject,
  deleteSubject,
};
