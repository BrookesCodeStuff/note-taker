const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Make the public data the 'root' to serve static assets
app.use(express.static('public'));

// 👂🏼
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
