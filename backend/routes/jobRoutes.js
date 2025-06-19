const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobController');

// Route to create a new job
router.post('/create', createJob);

// Route to get all jobs
router.get('/', getJobs);

module.exports = router;
// This code defines the job routes for creating and retrieving jobs.
// It uses Express Router to handle POST requests for creating jobs and GET requests for retrieving all jobs