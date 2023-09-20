import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvaluacionService } from "../../services/evaluacion.service";
import { SexoService } from '../../services/sexo.service';
import { EscalaAlopeciaItemService } from '../../services/escala-alopecia-item.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  title = 'Formulario de Evaluación de Alopecia Androgénica';

  evaluacionForm: any; // Objeto para almacenar el formulario en blanco
  sexos: any[] = []; // Lista de opciones para el control desplegable de sexo
  escalaAlopeciaItems: any[] = []; // Lista de opciones para el control desplegable de escala_alopecia_items


  constructor(
    private formBuilder: FormBuilder, 
    private evaluacionService: EvaluacionService,
    private sexoService: SexoService,
    private escalaAlopeciaItemService: EscalaAlopeciaItemService    
    ) { }

	ngOnInit() {
    // Cargar el formulario en blanco al iniciar el componente
    this.evaluacionForm = this.evaluacionService.getBlankEvaluacion();

    // Cargar datos para los controles desplegables
    this.loadSexos();
    this.loadEscalaAlopeciaItems();


  }


  // Función para cargar datos de sexo desde el servicio
  loadSexos(): void {
    this.sexoService.getSexos().subscribe((data: any) => {
      this.sexos = data; // Asignar los datos al arreglo de sexo paciente
    });
  }

  // Función para cargar datos de escala_alopecia_items desde el servicio
  loadEscalaAlopeciaItems(): void {
    this.escalaAlopeciaItemService.getEscalaAlopeciaItems().subscribe((data: any) => {
      this.escalaAlopeciaItems = data; // Asignar los datos al arreglo de escala_alopecia_items
    });
  }


}
