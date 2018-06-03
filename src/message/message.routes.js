const message = require('./message.controller');
const express = require('express');
const router = express.Router();
const authorize = require('../app.routes').authorize;

module.exports = router;

router.get('/chat', message.chat);
router.all('/api/*', authorize);
router.get('/api/messages', message.getMessages);
router.put('/api/messages', message.updateAll);
router.delete('/api/messages', message.deleteAll)
router.post('/api/messages', message.create);
router.get('/api/messages/:id', message.getMessage)
router.put('/api/messages/:id', message.update);
router.delete('/api/messages/:id', message.del);
