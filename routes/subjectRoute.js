const express = require("express");

const {
  getSubjects,
  getSubject,
  postSubject,
  deleteSubject,
  patchSubject,
} = require("../controllers/subjectController");

const router = express.Router();

router.get("/", getSubjects);

router.get("/:id", getSubject);

router.post("/", postSubject);

router.patch("/:id", patchSubject);

router.delete("/:id", deleteSubject);

module.exports = router;
