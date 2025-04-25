const { Router } = require('express');
const { createUser, getUsers } = require('../controller/all.controller');
const router = Router();

router.get('/all', getUsers);
router.post('/register', createUser);

module.exports = router;    
