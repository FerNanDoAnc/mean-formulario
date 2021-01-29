
const Formulario=require('../models/Formulario.js');


//Rutas
const formulariosCtrl={};

 
// interactuar con la bd
// ***********************************************
formulariosCtrl.getFormularios = async (req, res) =>{
    const formularios =await Formulario.find();
    res.json(formularios)
    res.send('Formulario encontrado')
}

formulariosCtrl.createFormularios = async (req, res) =>{
    const newFormulario=new Formulario(req.body);
    // guardarlo en la bd
    await newFormulario.save();
    res.send({message: 'Formulario Creado'});
}

formulariosCtrl.getFormulario = async (req, res) =>{
    // obetener un solo formulario
    const formulario=await Formulario.findById(req.params.id);
    res.send(formulario);
}

formulariosCtrl.deleteFormulario = async(req, res) =>{
    await Formulario.findByIdAndDelete(req.params.id)
    res.json({status:'Formulario eliminado'})
}
// **************************************************
module.exports=formulariosCtrl;
