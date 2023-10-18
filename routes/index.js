const express = require('express');

const router = express.Router();

console.log('router loaded');
const homeController = require('../controller/Home_Controller');

router.get ('/' , homeController.home);
router.use('/users' , require('./users'))

module.exports = router;
