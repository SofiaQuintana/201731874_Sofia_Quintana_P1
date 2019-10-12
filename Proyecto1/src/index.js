//imports

const express = require ('express');
const app = express();

//configuration
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.set('port', 3000);

app.use(express.static("public"));

//rutas
app.get('/', (request, response) => {
    response.render('index.ejs');
});

app.get('/home', (request, response) => {
    response.render('index.ejs');
});

//app.get('/home', (request, response) => {
  //  response.sendFile(__dirname+'/views/index.ejs');
//});

//listening
app.listen(app.get('port'), () => {
    console.log('en funcionamiento ');
});
