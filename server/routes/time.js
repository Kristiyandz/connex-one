const router = require('express').Router();
const { getTime } = require('../controllers');

router.get('/', getTime);

module.exports = router;
