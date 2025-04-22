const express = require('express');
const cors = require('cors');
const app = express();


const RepData = require("./RepData");
const UIOData = require("./UIOData");


app.use(cors());

app.get('/RepData', (req, res) => {
  res.json(RepData);  
});
app.get('/UIOData', (req, res) => {
  res.json(UIOData);  
});


// Start the server
app.listen(9000, () => {
  console.log('Server started on port 9000');
});
