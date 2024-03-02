const HeaderDetails = require("../models/headerDetailsModel");
const expressasynchandler = require("express-async-handler");

const addHeaderDetails = expressasynchandler(async (req, res) => {
  console.log(req.body);
  const { title, files } = req.body;

  try {
    const newHeaderDetails = await HeaderDetails.create({
      title,
      images: files,
    });
    console.log(newHeaderDetails);
    res.json(newHeaderDetails);
  } catch (error) {
    throw new Error(error);
  }
});

const getHeaderDetails = expressasynchandler(async (req, res) => {
  try {
    const headerdetails = await HeaderDetails.find();

    res.json(headerdetails);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = { addHeaderDetails, getHeaderDetails };
