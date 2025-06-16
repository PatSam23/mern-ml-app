const express = require('express');
const router = express.Router();
const { uploadResume } = require('../controllers/resumeController');
const multer = require('multer');
const path = require('path');

// Set up multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('resume'), uploadResume);

module.exports = router;
