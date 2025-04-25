const { Router } = require('express');
const { createProject, getProjects } = require('../controller/project.controller');
const router = Router();

router.get('/all', getProjects);
router.post('/create', createProject);

module.exports = router;