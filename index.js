const express = require('express');
const router = require('./routes/index');

const app = express();
app.use(express.json());

app.use('/', router);

app.use('', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(5000, () => console.log('App listening on port 5000!'));
