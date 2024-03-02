const Project = require("../models/projectModel");
const expressasynchandler = require("express-async-handler");

const createProject = expressasynchandler(async (req, res) => {
  const { title, demo, gitLink, category } = req?.body;
  try {
    const newProject = await Project.create({ title, demo, gitLink, category });
    console.log(newProject);
    res.json(newProject);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProjects = expressasynchandler(async (req, res) => {
  try {
    const projects = await Project.find();
    console.log(projects);
    res.json(projects);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createProject, getAllProjects };
