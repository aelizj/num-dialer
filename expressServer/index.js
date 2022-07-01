const express = require('express')
const app = express()
const port = 3000
const homePage = require('./index.html')

app.get('/', (req, res) => {
  res.format({
    
  
    'text/html' () {
      res.send(homePage)
    },
})

app.get('/home', (req, res) => {
  res.send("phone numbers are here")
})

app.post('/webhook', (req, res) => {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
});
  res.data = msg;
  res.send()
})

app.post('/startdialing', (req, res) => {
  res.send('started to dail the phone')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})