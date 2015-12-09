var express = require('express');
var app = express();

var events = [];

app.use(express.static('public'));

app.get('', function (req, res) {
  app.use(express.static( __dirname + "/public"));
});

app.get('/create_event', function (req, res) {

   // Prepare output in JSON format
   events.push([req.query.event_title, req.query.event_desc, []]);
   response = {
       event_title:req.query.event_title,
       event_desc:req.query.event_desc
   };
   res.send(JSON.stringify(response));
});

app.get('/join_chat', function (req, res) {

   // Prepare output in JSON format
   events[req.query.num_event][2].push(req.query.user_name);
   res.send(JSON.stringify("OK"));
});

app.get('/get_events', function (req, res) {
    res.send(JSON.stringify(events));
});

app.get('/get_chat', function (req, res) {

   // Prepare output in JSON format
   res.send(JSON.stringify(events[req.query.num_event][2]));
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});