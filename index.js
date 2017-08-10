var express = require("express");
var path = require('path');

var app = express();

app.use('/img', express.static(path.join(__dirname, 'img')))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
	console.log("running")
});


