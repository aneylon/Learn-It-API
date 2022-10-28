const express = require("express");

const {
  getLessons,
  getLessonsBySubject,
  getLesson,
  postLesson,
  deleteLesson,
  patchLesson,
} = require("../controllers/lessonController");

const router = express.Router();

router.get("/", getLessons);

router.get("/:id", getLesson);

router.get("/subject/:subjectId", getLessonsBySubject);

router.post("/", postLesson);

router.patch("/:id", patchLesson);

router.delete("/:id", deleteLesson);

module.exports = router;
