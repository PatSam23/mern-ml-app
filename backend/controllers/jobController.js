const Job = require('../models/Job');

const createJob = async (req, res) => {
  try {
    const newJob = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      description: req.body.description,
      requiredSkills: req.body.requiredSkills,
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createJob, getJobs };
// This code defines the job controller for creating and retrieving jobs.
// It uses Mongoose to interact with the MongoDB database and handle job-related operations.