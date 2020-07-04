const app = require('./config/server');

require('./app/routes/news')(app);

//Iniciar server

app.listen(app.get('port'), () => {
    console.log('Running on port', app.get('port'));
    
})