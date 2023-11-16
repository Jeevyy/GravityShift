const express = require('express');
const path = require('path');

const app = express();

// Set 'public' as the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Add a route to handle the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});