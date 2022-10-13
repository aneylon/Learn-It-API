const express = require("express");

const {
  getCardSets,
  getCardSet,
  postCardSet,
  deleteCardSet,
  patchCardSet,
} = require("../controllers/cardSetController");

const router = express.Router();

router.get("/", getCardSets);

router.get("/:id", getCardSet);

router.post("/", postCardSet);

router.patch("/:id", patchCardSet);

router.delete("/:id", deleteCardSet);

module.exports = router;
