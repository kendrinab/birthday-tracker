if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
require('./server/db/config/index');
const express = require('express');
const path = require('path');
const app = express();

const birthdayRouter = require('./server/routes/birthdays.js');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.use(express.json());
app.use('/birthdays', birthdayRouter);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});