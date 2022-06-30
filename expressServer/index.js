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
<<<<<<< HEAD
  let msg = `Got a ${req.method} at ${Date.now()}.`
=======
  let msg = `Got a ${req.method} at ${Time.now()}.`
>>>>>>> 29e9a845687ab996481723a23c51240db9d33f44
  res.send(msg)
})

app.post('/startdialing', (req, res) => {
  res.send('started to dail the phone')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})