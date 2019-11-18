const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { userId } = req.body;
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.',
    });
    return;
  }
  const reqBodykeys = Object.keys(req.body);
  let missingKeys = '';
  const keysArr = ['deposit_name', 'userId'];
  keysArr.forEach((item) => {
    if (!reqBodykeys.includes(item)) {
      missingKeys += `${item}`;
    }
  });
  if (missingKeys.length !== 0) {
    res.status(400).json({
      message: `Missing ${missingKeys}.`,
    });
    return;
  }
  res.status(200).json({
    id: userId,
  });
});
// leave space for Internal Server Error
module.exports = router;
