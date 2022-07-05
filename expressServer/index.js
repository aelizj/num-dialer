const express = require('express')
const app = express()
const port = 3000
const client = {stream: null};

app.use(express.json());

app.get('/', (req, res) => {
  client.stream = null
  res.set('Content-Type', 'text/html')
  res.sendFile("/home/aeliz/Capstone/num-dialer/expressServer/index.html")
})

app.get('/home', (req, res) => {
  res.send("phone numbers are here")
})

app.get('/stream', (req, res) => {
  console.log('request')
  res.writeHead(200,{
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
  });
  
  client.stream = res;
  // res = client.stream;
})
app.post('/webhook', (req, res) => {
  
  client.stream.write(`data: ${req.body}\n\n`)
  // console.log(client)
  console.log("req.body", req.body)
  // client.stream.write(req.body)
  // console.log(`data: ${msg}`)
  //res.status(200).send()
})

app.post('/startdialing', (req, res) => {
  res.send('started to dail the phone')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})