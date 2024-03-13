const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('quiz');
});

router.get('/quizSet1', (req, res) => {
  res.render('quizSet1');
});

router.get('/quizSet2', (req, res) => {
  res.render('quizSet2');
});

module.exports = router;
