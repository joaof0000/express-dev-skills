var express = require('express');
var router = express.Router();
const studentsCtrl = require('../controllers/students');

/* GET users listing. */

// Listen for HTTP Requests
// then they run the ctrl

router.get('/', studentsCtrl.index);
router.get('/new', studentsCtrl.new);
router.get('/:id', studentsCtrl.show);
router.post('/', studentsCtrl.create);

module.exports = router;


