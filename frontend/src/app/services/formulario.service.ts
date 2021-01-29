

import { Injectable } from '@angular/core';
// hacer peticiones
import {HttpClient} from '@angular/common/http';
import { Formulario } from '../models/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  
  URL_API='http://localhost:4100/api/formularios'
  
  // Objeto vacio para llenarlo en el DOM
  selectedFormulario: Formulario={
    nombre: '',
    cargo: '',
    celular: '',
    email: '',
    razon: '',
    necesidad:'',
    mensaje: '',
    createdAt: '',
  }; 
  // arreglo
  formularios: Formulario[];
  
  // para usar el http
  constructor(private http: HttpClient){}

  // metodos p´ obtener datos de la API
  getFormularios(){
    return this.http.get<Formulario[]>(this.URL_API);
  }
  createFormulario(formulario:Formulario){
    return this.http.post(this.URL_API,formulario);
  }
  deleteFormulario(_id:String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
