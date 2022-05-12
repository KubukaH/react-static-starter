const express = require('express');
const router = express.Router();
const likesService = require('../services/likes.service');
const validateRequest = require('../_middleware/validate-request');
const Joi = require('joi');

router.get('/', getAll);
router.post('/:id', getLikedBy);
router.get('/:id', getById);
router.post('/:id/like', createSchema, create);

module.exports = router;

function getAll(req, res, next) {
  likesService.getAll()
    .then(likes => res.json(likes))
    .catch(err => next(err));
}

function getById(req, res, next) {
  likesService.getById(req.params.id)
    .then(like => like ? res.json(like) : res.sendStatus(404))
    .catch(err => next(err));
}

function createSchema(req, res, next) {
  const schema = Joi.object({
    liked: Joi.boolean().valid(true).required(),
    liked_by: Joi.string().required()
  });
  validateRequest(req, next, schema);
}

function create(req, res, next) {
  likesService.create(req.params.id, req.body)
    .then(like => res.json(like))
    .catch(next);
}

function getLikedBy(req, res, next) {
  likesService.getLikedBy(req.params.id)
    .then(like => like ? res.json(like) : res.sendStatus(404))
    .catch(next);
};
