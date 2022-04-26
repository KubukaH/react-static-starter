const express = require('express');
const router = express.Router();
const contactusService = require('../services/contactus.service');
const validateRequest = require('../_middleware/validate-request');
const Joi = require('joi');

// routes authorize(Role.Admin)
router.post('/sendmessage', sendMessageSchema, sendMessage);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', _delete);

module.exports = router;

function sendMessageSchema(req, res, next) {
  const schema = Joi.object({
    names: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string().required()
  });
  validateRequest(req, next, schema);
}

function sendMessage(req, res, next) {
  contactusService.sendmessage(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  contactusService.getAll()
    .then(messages => res.json(messages))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  contactusService.getById(req.message.sub)
    .then(message => message ? res.json(message) : res.sendStatus(404))
    .catch(err => next(err));
}

function getById(req, res, next) {
  contactusService.getById(req.params.id)
    .then(message => message ? res.json(message) : res.sendStatus(404))
    .catch(err => next(err));
}

function create(req, res, next) {
  contactusService.create(req.body)
    .then(message => res.json(message))
    .catch(next);
}

function _delete(req, res, next) {
  contactusService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}