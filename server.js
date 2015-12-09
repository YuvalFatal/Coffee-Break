var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('', function (req, res) {
  console.log('Welcome')
  app.use(express.static( __dirname + "/public"));
})

app.get('/create_event', function (req, res) {

   // Prepare output in JSON format
   response = {
       event_title:req.query.event_title,
       event_desc:req.query.event_desc
   };
   console.log(response);
   res.send(JSON.stringify(response));
})

app.get('/Feed.html', function (req, res) {

})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})