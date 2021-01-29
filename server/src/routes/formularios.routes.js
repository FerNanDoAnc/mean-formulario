// reuqerir expres para guardar rutas/URL
const {Router}= require('express')
const router=Router()

//requerir funcionees del formularios controller
const formulariosCtrl=require('../controllers/formularios.controllers.js')

// CRUD

router.get('/',formulariosCtrl.getFormularios);
router.post('/',formulariosCtrl.createFormularios);
router.get('/:id',formulariosCtrl.getFormulario);
// router.put('/:id',formulariosCtrl.editFormulario);
router.delete('/:id',formulariosCtrl.deleteFormulario);




module.exports=router
