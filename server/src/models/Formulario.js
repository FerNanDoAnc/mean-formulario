// requerir esquema,para guardar en la db y modelpR el crud
const {Schema, model}= require('mongoose')

const formularioSchema = new Schema(
    {
        nombre:{type: String,required:true},
        cargo:{type: String,required:true},
        celular:{type: String,required:true},
        email:{type: String,required:true},
        razon:{type: String,required:true},
        necesidad:{type: String,required:true},
        mensaje:{type: String,required:true},
    },
    {
        // fecha quw se creo
        timestamps:true,
        versionKey:false
    }
);

module.exports =model("Formulario",formularioSchema);