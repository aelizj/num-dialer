problem
  inside our webhook, we recieve a post request with some info into the request body
  and we need to get it to the client side using server sent events


-----------------------------------------------------------------------------------------
example
Webhook:

app.post('/webhook', (req, res) => {
  let msg = `Got a ${req.method} at ${Time.now()}.`
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
});
  res.data = msg;
  res.send()
})

Browser:

const evtSource = new EventSource("localhost:3000/webhook");
evtSource.onMessage = (e) => {
  console.log(e.data)
}



-----------------------------------------------------------------------------------------
data

res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
});
-----------------------------------------------------------------------------------------
algo

-----------------------------------------------------------------------------------------
code