const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');
const authorize = require('../_middleware/authorize')
const Role = require('../_helpers/role');
const musicService = require('../services/music.service');

// routes
router.post('/upalodtrack', uploadTrackSchema, uploadTrack);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function uploadTrackSchema(req, res, next) {
  const schema = Joi.object({
    trackName: Joi.string().required()
  });
  validateRequest(req, next, schema);
}

function uploadTrack(req, res, next) {
  musicService.uploadTrack(req.body)
    .then(() => res.json({ message: 'Song was added!' }))
    .catch(next);
}

function getAll(req, res, next) {
  musicService.getAll()
    .then(tracks => res.json(tracks))
    .catch(next);
}

function getById(req, res, next) {
  musicService.downloadTrack(req.params.id)
    .then(music => {
      res.set('content-type', 'audio/mp3');
      res.set('accept-ranges', 'bytes');
    
      music.downloadStream.on('data', (chunk) => {
        res.write(chunk);
      });

      music.downloadStream.on('error', () => {
        res.sendStatus(404);
      });
    
      music.downloadStream.on('end', () => {
        res.end();
      })

    })
    .catch(next);
}

function _delete(req, res, next) {

  musicService.delete(req.params.id)
    .then(() => res.json({ message: 'Track deleted successfully' }))
    .catch(next);
}
