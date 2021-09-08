// import modules
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

var app = express();

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('public')); // where static .js files are served
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/', function (req, res){
    res.render('home.handlebars')
});

app.listen(app.get('port'), function (){
    console.log('App listening on port ' + app.get('port') + '. Press Ctrl-C to terminate')	
});
