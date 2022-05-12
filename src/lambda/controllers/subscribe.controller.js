const express = require('express');
const router = express.Router();
const subscribeService = require('../services/subscribe.service');
const validateRequest = require('../_middleware/validate-request');
const Joi = require('joi');

// routes
router.post('/saveemail', saveEmailSchema, saveEmail);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', _delete);

module.exports = router;

function saveEmailSchema(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });
  validateRequest(req, next, schema);
}

function saveEmail(req, res, next) {
  subscribeService.saveEmail(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  subscribeService.getAll()
    .then(emails => res.json(emails))
    .catch(err => next(err));
}

function getById(req, res, next) {
  subscribeService.getById(req.params.id)
    .then(email => email ? res.json(email) : res.sendStatus(404))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  subscribeService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}