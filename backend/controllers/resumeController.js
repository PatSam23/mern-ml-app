const path = require('path');

const uploadResume = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const filePath = path.join(__dirname, '..', req.file.path);
  console.log('Resume saved at:', filePath);

  // TODO: Call Python ML model here

  return res.status(200).json({ message: 'Resume uploaded successfully', filePath });
};

module.exports = { uploadResume };
