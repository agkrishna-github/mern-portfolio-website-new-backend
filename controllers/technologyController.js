const Technology = require("../models/technologyModel");
const expressasynchandler = require("express-async-handler");

const createTechnology = expressasynchandler(async (req, res) => {
  try {
    const newTechnology = await Technology.create({ title: req?.body?.title });
    console.log(newTechnology);
    res.json(newTechnology);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllTechnology = expressasynchandler(async (req, res) => {
  try {
    const allTechnologies = await Technology.find();

    res.json(allTechnologies);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createTechnology, getAllTechnology };
