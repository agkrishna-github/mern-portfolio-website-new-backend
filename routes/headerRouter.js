const express = require("express");
const router = express();
const {
  addHeaderDetails,
  getHeaderDetails,
} = require("../controllers/headerController");

router.post("/", addHeaderDetails);
router.get("/getheaderdetails", getHeaderDetails);

module.exports = router;
