import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  title = 'Formulario de Evaluación de Alopecia Androgénica';

  constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {

  }

}
