const database = require('./conf')
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
  response.send('Welcome to Express')
})

app.get('/children', (request, response) => {
  database.query('SELECT * FROM child LEFT JOIN gift ON gift.child_id = child.id', (err, results) => {
    if (err) {
      response.status(500).send('Failed to get children')
    }
    response.send(results)
  })
})

app.delete('/gifts/:id', (request, response) => {
  database.query('DELETE FROM gift WHERE id = ?', [request.params.id], (err, results) => {
    if (err) {
      response.status(500).send('Failed to delete gift')
    }
    response.sendStatus(200)
  })
})

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...')
  }

  console.log(`Server is listening on ${port}`)
})