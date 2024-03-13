const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('omr');
});

module.exports = router;
