var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
//All actual paths swart with "/skills"

// GET/skills
router.get('/', skillsCtrl.index);

//Get /slills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
