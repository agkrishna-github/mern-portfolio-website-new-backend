const express = require("express");
const router = express();
const {
  createTechnology,
  getAllTechnology,
} = require("../controllers/technologyController");

router.post("/", createTechnology);
router.get("/", getAllTechnology);

module.exports = router;
