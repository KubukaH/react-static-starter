const express = require('express');
const router = express.Router();
const newsService = require('../services/news.service');
const validateRequest = require('../_middleware/validate-request');
const Joi = require('joi');

router.post('/savenews', saveNewsSchema, saveNews);
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.post('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

function saveNewsSchema(req, res, next) {
  const schema = Joi.object({
    author: Joi.string().required(),
    article_title: Joi.string().required(),
    category: Joi.string().required(),
    article_content: Joi.string().required()
  });
  validateRequest(req, next, schema);
}

function saveNews(req, res, next) {
  newsService.saveNews(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  newsService.getAll()
    .then(articles => res.json(articles))
    .catch(err => next(err));
}

function getById(req, res, next) {
  newsService.getById(req.params.id)
    .then(article => article ? res.json(article) : res.sendStatus(404))
    .catch(err => next(err));
}

function createSchema(req, res, next) {
  const schema = Joi.object({
    author: Joi.string().required(),
    article_title: Joi.string().required(),
    category: Joi.string().required(),
    article_content: Joi.string().required()
  });
  validateRequest(req, next, schema);
}

function create(req, res, next) {
  newsService.create(req.body)
    .then(article => res.json(article))
    .catch(next);
}

function updateSchema(req, res, next) {
  const schemaRules = {
    author: Joi.string().empty(''),
    article_title: Joi.string().empty(''),
    category: Joi.string().empty(''),
    article_content: Joi.string().empty('')
  };

  validateRequest(req, next, schemaRules);
}

function update(req, res, next) {
  newsService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  newsService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}