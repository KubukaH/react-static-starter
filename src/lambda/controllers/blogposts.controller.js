const express = require('express');
const router = express.Router();
const blogpostService = require('../services/blogpost.service');
const authorize = require('../_middleware/authorize');
const validateRequest = require('../_middleware/validate-request');
const Joi = require('joi');
const Role = require('../_helpers/role');

// routes
router.post('/makepost', makepostSchema, makepost);
router.get('/', getAll);
router.get('/:id', getById);
router.get('/', getCount);
router.put('/:id', authorize(), updateSchema, update);
router.post('/', authorize(Role.Admin), createSchema, create);
router.delete('/:id', _delete);

module.exports = router; 

function makepostSchema(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    blog_title: Joi.string().min(6).required(),
    blog_message: Joi.string().required()
  });
  validateRequest(req, next, schema);
}

function makepost(req, res, next) {
  blogpostService.makepost(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  blogpostService.getAll()
    .then(blogs => res.json(blogs))
    .catch(err => next(err));
}

function getById(req, res, next) {
  blogpostService.getById(req.params.id)
    .then(blog => blog ? res.json(blog) : res.sendStatus(404))
    .catch(err => next(err));
}

function getCount(req, res, next) {
  blogpostService.getCount()
    .then(blog => res.json(blog))
    .catch(err => next(err));
}

function createSchema(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    blog_title: Joi.string().min(6).required(),
    blog_message: Joi.string().required()
  });
  validateRequest(req, next, schema);
}

function create(req, res, next) {
  blogpostService.create(req.body)
      .then(blog => res.json(blog))
      .catch(next);
}

function updateSchema(req, res, next) {
  const schemaRules = {
    title: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    blog_title: Joi.string().min(6).required(),
    blog_message: Joi.string().required()
  };

  validateRequest(req, next, schemaRules);
}

function update(req, res, next) {
  blogpostService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  blogpostService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}