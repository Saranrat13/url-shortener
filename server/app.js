const express    = require('express')
const app        = express()


app.get("/", function (req, res) {
  console.log('This is someSN final project homepage!')
  res.send('Welcome to somSN homepage')
})



// app.get("/google", function (req, res) {
//
//   //code from https://github.com/request/request
//   const request = require('request')
//     request('http://www.google.com', function (error, response, body) {
//       console.log('error:', error) // Print the error if one occurred
//       console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
//       console.log('body:', body) // Print the HTML for the Google homepage.
//     }
//     res.redirect(request)
// })




//======= setup local host port 3000 =======
app.listen(3000, function() {
  console.log('Server is listening!!!!')
})
