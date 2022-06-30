const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send("phone numbers are here")
})

app.post('/webhook', (req, res) => {
  let msg = `Got a ${req.method} at ${Date.now()}.`
  res.send(msg)
})

app.post('/startdialing', (req, res) => {
  res.send('started to dail the phone')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})