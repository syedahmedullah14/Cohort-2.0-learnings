/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Define endpoint to get list of files
app.get('/files', (req, res) => {
  const directoryPath = path.join(__dirname, 'files');

  // Read files in the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      // If error occurs, return error response
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Return list of files in JSON format
    res.status(200).json({ files });
  });
});

// Define endpoint to get content of a specific file
app.get('/file/:filename', async (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'files', filename);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    res.status(200).send(fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).send('File not found');
    } else {
      console.error('Error reading file:', error);
      res.status(500).send('Internal Server Error');
    }
  }
});

// Define catch-all route for 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



module.exports = app;