const express = require('express');
const router = express.Router();
const projectService = require('../services/project.service');
const authorize = require('../_middleware/authorize')
const validateRequest = require('../_middleware/validate-request');
const Joi = require('joi');

// routes authorize(Role.Admin)
router.post('/saveproject', authorize(), saveProjectSchema, saveProject);
router.get('/', getAll);
router.get('/:id', getById);
router.post('/:id', authorize(), updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

function saveProjectSchema(req, res, next) {
  const schema = Joi.object({
    project_author: Joi.string().required(),
    project_title: Joi.string().required(),
    project_description: Joi.string().required()
  });
  validateRequest(req, next, schema);
}

function saveProject(req, res, next) {
  projectService.saveProject(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  projectService.getAll()
    .then(projects => res.json(projects))
    .catch(err => next(err));
}

function getById(req, res, next) {
  projectService.getById(req.params.id)
    .then(project => project ? res.json(project) : res.sendStatus(404))
    .catch(err => next(err));
}

function updateSchema(req, res, next) {
  const schemaRules = {
    project_author: Joi.string().empty(''),
    project_title: Joi.string().empty(''),
    project_description: Joi.string().empty('')
  };

  validateRequest(req, next, schemaRules);
}

function update(req, res, next) {
  projecttService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  projectService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}