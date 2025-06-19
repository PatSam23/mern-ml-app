const path = require('path');
const { spawn } = require('child_process');

const uploadResume = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const filePath = path.join(__dirname, '..', req.file.path);
  console.log('Resume saved at:', filePath);

  const pyProcess = spawn('python', ['ml_model/analyze_resume.py', filePath]);

  let result = '';

  pyProcess.stdout.on('data', (data) => {
    result += data.toString();
  });

  pyProcess.stderr.on('data', (data) => {
    console.error(`Python stderr: ${data}`);
  });

  pyProcess.on('close', (code) => {
    try {
      const parsed = JSON.parse(result);
      return res.status(200).json({ message: 'Analysis complete', data: parsed });
    } catch (err) {
      console.error('Error parsing Python output', err);
      return res.status(500).json({ error: 'Failed to parse ML output' });
    }
  });
};

module.exports = { uploadResume };
// This code handles the resume upload and invokes the Python script for analysis.
// It uses the 'child_process' module to spawn a Python process and communicate with it.