var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
"article-one" : {
    title: "Articel One ! Amit",
    heading:"Article ONE",
    date:"23rd march",
    content:`
    <h1>Hello, world!</h1>
    <h2>This is the FIRST ARTICLE PAGE</h2>
    <P>SAMLE taxt goes here. SAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes here</P> 
    `
},
"article-two":{
    title: "Articel Two by ! Amit",
    heading:"Article twoE",
    date:"25rd march",
    content:`
    <h1>Hello, world!</h1>
    <h2>This is the second ARTICLE PAGE</h2>
    <P>SAMLE taxt goes here. SAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes here</P> `
},
"article-three":{
    title: "Articel Three by Great ! Amit",
    heading:"Article three",
    date:"27rd march",
    content:`
    <h1>Hello, world!</h1>
    <h2>This is the three ARTICLE PAGE</h2>
    <P>SAMLE taxt goes here. SAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes hereSAMLE taxt goes here</P> 
    `
}
};

function createTemplate(data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate =     `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    ${title}

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  ${heading}
  ${date}
   ${content}

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
    `;
    return htmlTemplate;
}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {

var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
