const express = require('express');

const app = express();

const port = process.env.PORT || 8085;

const emails = [{
    id: 1,
    topic: 'Email 1'
  }, {
    id: 2,
    topic: 'Email 2'
  }]

app.use(express.static('public'));

app.get('/emails', (req, res) => {
    res.send(emails);
})

app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
})