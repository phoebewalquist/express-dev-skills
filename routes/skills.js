var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
//All actual paths swart with "/skills"

// GET/skills
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

//Get /slills/:id
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

module.exports = router;
