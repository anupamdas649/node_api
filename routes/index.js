const express = require('express');
const {
  getAllPerson,
  addAPerson,
  deleteAPerson,
  getByGender,
} = require('../controller/index');

const router = express.Router();

router.get('/', getAllPerson);
router.post('/', addAPerson);
router.delete('/:id', deleteAPerson);

router.get('/getByGender/:gender', getByGender);

module.exports = router;
