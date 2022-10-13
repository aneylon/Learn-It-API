const express = require("express");

const {
  getCards,
  getCard,
  postCard,
  deleteCard,
  patchCard,
} = require("../controllers/cardController");

const router = express.Router();

router.get("/", getCards);

router.get("/:id", getCard);

router.post("/", postCard);

router.patch("/:id", patchCard);

router.delete("/:id", deleteCard);

module.exports = router;
