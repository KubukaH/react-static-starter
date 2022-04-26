const db = require('../_helpers/db');
const Project = db.Project;

module.exports = {
  saveProject,
  getAll,
  getById,
  update,
  delete: _delete
}; 

async function saveProject(params) {
  const project = new Project(params);

  await project.save();
}

async function getAll() {
  return await Project.find();
}

async function getById(id) {
  return await Project.findById(id);
}

async function update(id, params) {
  const article = await Project.findById(id);

  // copy params to article and save
  Object.assign(article, params);
  article.updated = Date.now();

  await article.save();

  return article;
}

async function _delete(id) {
  await Project.findByIdAndRemove(id);
}