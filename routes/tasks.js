'use strict';
const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res, next) => {
    res.send('TASK API');
});

module.exports = router;