const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const hello_controller = require('../controllers/hello.controller');


// a simple hello url to check that all of our files are communicating correctly.
router.get('/world', hello_controller.test);

module.exports = router;

