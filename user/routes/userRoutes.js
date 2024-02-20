const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Routes pour les utilisateurs
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getoneUser);
router.post('/', UserController.createoneUser);
router.put('/:id', UserController.updateoneUser);
router.delete('/:id', UserController.deleteoneUser);

module.exports = router;
