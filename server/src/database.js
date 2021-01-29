// Requerir mongoose
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-formularios',{
    // para q mongoose deje de enviar advertencias
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
    useFindAndModify: false
})
.then((db) =>console.log('Base de datos conectada'))
.catch((err)=>console.error(err));
 