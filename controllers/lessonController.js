const mongoose = require("mongoose");
const Lesson = require("../models/lesson");

const getLessons = async (req, res) => {
  const lessons = await Lesson.find({}).sort({ createdAt: -1 });
  res.status(200).json({ lessons });
};

const getLesson = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: `Not a valid Id : ${id}` });
  const lesson = await Lesson.findById(id);
  if (!lesson)
    return res.status(400).json({ error: `No document for id : ${id}` });
  res.status(200).json({ lesson });
};

const postLesson = async (req, res) => {
  console.log(req.body);

  try {
    const lesson = await Lesson.create({ ...req.body });
    res.status(200).json(lesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const patchLesson = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Not a valid Id" });
  const lesson = await Lesson.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!lesson) return res.status(400).json({ error: "No such Id" });
  const updatedLesson = await Lesson.findById(id);
  res.status(200).json({ lesson, updatedLesson });
};

const deleteLesson = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Not a valid Id" });
  const lesson = await Lesson.findOneAndDelete({ _id: id });
  if (!lesson) return res.status(400).json({ error: "No such Id" });
  res.status(200).json({ lesson });
};

module.exports = {
  getLessons,
  getLesson,
  postLesson,
  patchLesson,
  deleteLesson,
};
