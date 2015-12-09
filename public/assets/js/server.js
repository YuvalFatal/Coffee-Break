var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
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

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})