//Import the requirements
var express = require('express'),
    path = require('path');

//Initialize the App    
var app = express();

//Configuring the View, Express in default use JADE, since we are not rendering
//and going to use HTML directly, we imported EJS and set the engine to HTML
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

//Setting up express to public folder so that it looks for client items directly from that folder.
app.use(express.static(path.join(__dirname, 'public')));

//Routing defined here
app.get('*', function(req, res){
    res.render('index');
});

//Listening to the default PORT mentioned in ENV variable
app.listen(process.env.PORT, process.env.IP);
console.log(process.env.PORT, process.env.IP);

//In Local, using PORT 3000
//app.listen(3000);
//console.log("Mechanica is on PORT 3000");