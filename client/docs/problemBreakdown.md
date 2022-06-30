# Problem

Given a list of numbers, dail the numbers 3 at a time using a provided api, and display the call status on the browser using a webhook
  Input - a list of numbers
  Output - a display with the status of all calls
  Rules
    - dial numbers 3 at a time
    - numbers can be called more than once
    - dial numbers in order
    - phone number is a string
    - webhook url is a string
    - status of phone call must update without refresh

# Examples

list of numners:
["Pauline phone", "Anne phone", "Olga phone", "Don Phone"]
__________________________________________________
Phone Numner        Status
"Pauline phone",    Idle
"Anne phone",       Idle
"Olga phone",       Idle
"Don Phone"         Idle
------
|call|
------
___________________________________________________

Phone Numner        Status
"Pauline phone",    "Ringing"
"Anne phone",       "Answered"
"Olga phone",       "Completed"
"Don Phone"         Idle
------
|call|
------
__________________________________________________

# Data
react State start: 
[{number:"Pauline phone", status: "Idle"},{number: "Anne phone",status: "Idle"},{number: "Olga phone",status: "Idle"},{number: "Don Phone", status: "Idle"}]

react state during:
[{number: "Pauline phone", status: "Ringing" id:1}, {number: "Anne phone", status: "Answered", id:2}, {number: "Olga phone", status: "Completed", id:3}, {number: "Don phone", status: "Idle"}]

-----------------------------------------------------------------------------------------

# Order of Build
1. page-ui --> Display the list of phone numbers and status with non-functional call button
2. webhook --> build webhook
3. react-state --> do something with webhook to change the state of react store
4. one-phonecall-backend --> write some function that "calls for one"
5. three-phonecalls-backend --> write some function that iterates thru 3 at a time??

Notes from chatting w/ Srdjan & Max
- Server sent events - EJS
- Set up endpoint for webhook & send POST to endpoint on server 

# Algo

# Code

Backend
- only dial 3 numbers at a time, in order
- only dial thru the list once
- numbers may be repeated on the list

Webhooks
 - recieves POST requests from the API with the call id, and the status
 - passes this information to ?? display???

Display
 - show a list of all the numbers with idle status (does not yet have call id)
 - show a button labeled `call` that starts the dialing process
 - update each number with the call status change as it happens (now has a call id??)
___________________________________

Functionality

- POST /call
  Send: 
    - Phone # string; format 13018040009
  - Webhook URL - server will use this to provide status updates (via POST reqs)

  Receive: JSON Obj; format {"id": 1234 }
  
- Status updates sent to webhook are POST requests containing JSON obj w/ call id & status
- When status is updated, this change should be displayed on front end

Statuses 
  "ringing"
  "answered"
  "completed"

When status is completed next # in list should be dialed (new POST req sent)




  