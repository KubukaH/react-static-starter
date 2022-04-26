const express = require('express');
const router = express.Router();
const mailingService = require('../services/mailing.service');
const validateRequest = require('../_middleware/validate-request');
const Joi = require('joi');

router.post('/save', saveListSchema, saveList);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', _delete);

module.exports = router;

function saveListSchema(req, res, next) {
  const schema = Joi.object({
    names: Joi.string().required(),
    email: Joi.string().email().required(),
    termsOfUse: Joi.boolean().valid(true).required()
  });
  validateRequest(req, next, schema);
};

function saveList(req, res, next) {
  mailingService.saveList(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
};

function getAll(req, res, next) {
  mailingService.getAll()
    .then(lists => res.json(lists))
    .catch(err => next(err));
};

function getById(req, res, next) {
  mailingService.getById(req.params.id)
    .then(mlist => mlist ? res.json(mlist) : res.sendStatus(404))
    .catch(err => next(err));
};

function _delete(req, res, next) {
  mailingService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
};