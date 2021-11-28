import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulariodecontacto-sandoval';
  form: FormGroup;


  constructor() {
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(5)]),
      apellido: new FormControl(''),
      email: new FormControl('', Validators.email),
      telefono: new FormControl('', Validators.minLength(8)),
      comentario: new FormControl(''),
    });
  }
  submit(){
    console.log()
  }
}
