// index.js

const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./task');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
