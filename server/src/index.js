// REQUERIR LA BD
require('./database')
// requerir app del aapp.js
const app=require('./app');

// escuchar el puerto
app.listen(app.get('port'));
console.log('Servidor en el puerto',app.get('port'));