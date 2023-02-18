// Import necessary modules
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Set up express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const uniqueId = uuidv4();
    cb(null, `${uniqueId}${fileExt}`);
  },
});

// Set up multer middleware
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
  fileFilter: function (req, file, cb) {
    const allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG and GIF files are allowed.'));
    }
  },
});

// Define route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      throw new Error('No file selected');
    }
    const fileId = path.parse(file.filename).name;
    const downloadLink = `https://example.com/download/${fileId}`;
    res.status(200).json({ downloadLink: downloadLink });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
