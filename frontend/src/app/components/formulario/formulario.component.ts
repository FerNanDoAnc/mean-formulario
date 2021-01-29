import { Component, OnInit } from '@angular/core';
// importar servicio
import { FormularioService } from '../../services/formulario.service';
// para traer todo el formulario -...clase
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // para poder utilzar los metodos de la clase
  constructor(public formularioService: FormularioService) { }

  ngOnInit(): void {
    // llamando a la funcion
    this.getFormularios();
  }

  getFormularios(){
    this.formularioService.getFormularios().subscribe(
      res=>{
        this.formularioService.formularios=res;
      },
      err=>console.error(err)
    )
  }  

  addFormulario(form: NgForm){
    this.formularioService.createFormulario(form.value).subscribe(
      res=> {
        this.getFormularios();
        form.reset();
      },
      err=>console.error(err)
    );
    console.log(form.value)
  }
  
  deleteFormulario(id:String){
    if (confirm('¿Elimninar Formulariio?')) {
      this.formularioService.deleteFormulario(id).subscribe(
      (res)=>{
        this.getFormularios();
      },
      (err)=>console.error(err)
      );
    }
  }
}
