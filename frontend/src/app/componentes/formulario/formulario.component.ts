import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvaluacionService } from "../../services/evaluacion.service";
import { SexoService } from '../../services/sexo.service';
import { EscalaAlopeciaItemService } from '../../services/escala-alopecia-item.service';
import { AreaSinPeloService } from '../../services/area-sin-pelo.service';
import { PuntosAmarillosService } from '../../services/puntos-amarillos.service';
import { GrosorPeloComparacionService } from '../../services/grosor-pelo-comparacion.service';
import { PeloFinosFrontalService } from '../../services/pelo-finos-frontal.service';
import { ProporcionFrontalVsOccipitalService } from '../../services/proporcion-frontal-vs-occipital.service';
import { ExistenciaPelosVellososMiniaturizadoService } from '../../services/existencia-pelos-vellosos-miniaturizado.service';
import { DecoloracionPielService } from '../../services/decoloracion-piel.service';
import { GradoAlopeciaService } from '../../services/grado-alopecia.service';
import { EscalaAlopeciaService } from '../../services/escala-alopecia.service';
import { ActivatedRoute } from '@angular/router';

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
  areaSinPelos: any[] = [];
  puntosAmarrillos: any[] = [];
  grosorPeloComparacion: any[] = [];
  peloFinosFrontal: any[] = [];
  proporcionFrontalVsOccipital: any[] = [];
  existenciaPelosVellososMiniaturizado: any[] = [];
  decoloracionPiel: any[] = [];
  gradoAlopecia: any[] = [];
  escalaAlopecia: any[] = [];

  //mostrar controles inferiores:
  mostrarControles: boolean = false;

  // texto sugerencia:
  sugerenciaDiagnostico: string = '';

//Grado Alopecia:
sexoSeleccionado: number | null = null; 
escalaAlopeciaFiltrada: any[] = [];


  constructor(
    private formBuilder: FormBuilder, 
    private evaluacionService: EvaluacionService,
    private sexoService: SexoService,
    private escalaAlopeciaItemService: EscalaAlopeciaItemService,
    private areaSinPeloService: AreaSinPeloService,
    private puntosAmarillosService: PuntosAmarillosService,
    private grosorPeloComparacionService: GrosorPeloComparacionService,
    private peloFinosFrontalService: PeloFinosFrontalService,
    private proporcionFrontalVsOccipitalService: ProporcionFrontalVsOccipitalService,
    private existenciaPelosVellososMiniaturizadoService: ExistenciaPelosVellososMiniaturizadoService,
    private decoloracionPielService: DecoloracionPielService,
    private gradoAlopeciaService:GradoAlopeciaService,
    private escalaAlopeciaService:EscalaAlopeciaService,
    private route: ActivatedRoute // Inyecta el módulo ActivatedRoute
    ) { }

	ngOnInit() {
    // Cargar el formulario en blanco al iniciar el componente
    this.evaluacionForm = this.evaluacionService.getBlankEvaluacion();

    // Cargar datos para los controles desplegables
    this.loadSexos();
    this.loadEscalaAlopeciaItems();
    this.loadAreaSinPelo();
    this.loadPuntosAmarrillos();
    //----
    this.loadGrosorPeloComparacion();
    this.loadPeloFinosFrontal();
    this.loadProporcionFrontalVsOccipital();
    this.loadExistenciaPelosVellososMiniaturizado();
    this.loadDecoloracionPiel();
    this.loadGradoAlopecia();
    this.loadescalaAlopecia();

    // // Obtén el ID del registro desde la ruta
    this.route.params.subscribe(params => {
      const registroId = +params['id']; // Convierte el parámetro 'id' a un número
      if (!isNaN(registroId)) {
        // Llama a un método para cargar los datos del registro por ID
        this.cargarRegistroPorId(registroId);
      }
    });
    // //-------------------------------------

  }


  cargarRegistroPorId(registroId: number) {
    this.evaluacionService.getEvaluacionById(registroId).subscribe((data: any) => {
      this.evaluacionForm = data;
      this.filtrarEscalaAlopecia();
      // Realiza cualquier otro procesamiento necesario
      this.GenerarSugerencia();

      this.mostrarControles = true;  

    });
  }

  updateProduct():void{
        if (this.evaluacionForm.id !== undefined) {
                this.evaluacionService.updateEvaluacion(this.evaluacionForm.id,this.evaluacionForm).subscribe((data: any) => {
                  this.evaluacionForm = data;

                  this.GenerarSugerencia();

                  alert("se actualizó los datos de forma exitosa");
                  this.mostrarControles = true;        
              

                   }
                );
         } else {
                this.evaluacionService.createEvaluacion(this.evaluacionForm).subscribe((data: any) => {
                  this.evaluacionForm = data; 

                  this.GenerarSugerencia();
                    alert("se creó la evaluación");
                    this.mostrarControles = true;  

                   }
                );
           }
  }

  GenerarSugerencia() {
    const strGradoAlopecia = this.obtenerGradoAlopecia();
    const strFraseGrado = "Y tiene un grado de Alopesia: " + strGradoAlopecia;

      const pesos = [
        this.getPesoPorId(this.evaluacionForm.areas_sin_pelo_id, this.areaSinPelos),
        this.getPesoPorId(this.evaluacionForm.puntos_amarillos_id, this.puntosAmarrillos),
        this.getPesoPorId(this.evaluacionForm.grosor_pelo_comparacion_id, this.grosorPeloComparacion),
        this.getPesoPorId(this.evaluacionForm.pelo_finos_frontal_id, this.peloFinosFrontal),
        this.getPesoPorId(this.evaluacionForm.proporcion_frontal_vs_occipital_id, this.proporcionFrontalVsOccipital),
        this.getPesoPorId(this.evaluacionForm.existencia_pelos_vellosos_miniaturizados_id, this.existenciaPelosVellososMiniaturizado),
        this.getPesoPorId(this.evaluacionForm.decoloracion_piel_id, this.decoloracionPiel)
      ];

      const mayorPeso = Math.max(...pesos);

      // Genera la sugerencia basada en el mayor peso
      let sugerencia = '';
      if (mayorPeso === 0) {
        this.sugerenciaDiagnostico = 'El paciente tiene una probabilidad muy baja de tener AGA.' + strFraseGrado;
      } else {
        this.sugerenciaDiagnostico = `El paciente tiene una probabilidad de ${mayorPeso * 100}% de tener AGA.` + strFraseGrado;
      }
    }

    obtenerGradoAlopecia() {
      const escalaAlopeciaIdSeleccionado = this.evaluacionForm.escala_alopecia_item_id; // Obtener el ID seleccionado en el control "Grado Alopecia"
    if (escalaAlopeciaIdSeleccionado != null && escalaAlopeciaIdSeleccionado !=undefined){

      // Buscar el Grado Alopecia correspondiente en gradoAlopeciaItems
      const gradoAlopeciaEncontradoTemporal1 = this.escalaAlopeciaItems.find(item => item.id.toString() == escalaAlopeciaIdSeleccionado);
      const gradoAlopeciaEncontrado = this.gradoAlopecia.find(item => item.id == gradoAlopeciaEncontradoTemporal1.grado_alopecia_id);
      if (gradoAlopeciaEncontrado) {
        return gradoAlopeciaEncontrado.descripcion; // Devolver la descripción del Grado Alopecia
      } else {
        return ''; // Devolver un valor predeterminado o vacío si no se encuentra
      }
    } else {
      return '';
    }

    }



    getPesoPorId(id: number, array: any[]) {
      const elemento = array.find(item => item.id === id);
      return elemento ? elemento.peso_aga : 0;
    }

    filtrarEscalaAlopecia() {
      this.sexoSeleccionado = this.evaluacionForm.sexo_id;
      if (this.sexoSeleccionado !== null) {
        let numerString: string = String(this.sexoSeleccionado);
        const resultadoFiltrado = this.escalaAlopecia.filter(item => item.sexo_id.toString() === numerString);
        const arrvalor =resultadoFiltrado.map(item => item.id);
        const idsFiltrados = arrvalor.length > 0 ? arrvalor[0]:0;
          this.escalaAlopeciaFiltrada = this.escalaAlopeciaItems.filter(item => item.escala_alopecia_id === idsFiltrados);
      } else {
        // Si no se ha seleccionado sexo, muestra todos los valores
        this.escalaAlopeciaFiltrada = this.escalaAlopeciaItems;
      }
    }
    

  // Funciones para cargar datos en los desplegables del formulario:
  loadSexos(): void {
    this.sexoService.getSexos().subscribe((data: any) => {
      this.sexos = data; // Asignar los datos al arreglo
    });
  }


  loadEscalaAlopeciaItems(): void {
    this.escalaAlopeciaItemService.getEscalaAlopeciaItems().subscribe((data: any) => {
      this.escalaAlopeciaItems = data; 
    });
  }

  loadAreaSinPelo(): void {
    this.areaSinPeloService.getAreasSinPelo().subscribe((data: any) => {
      this.areaSinPelos = data; 
    });
  }

  loadPuntosAmarrillos(): void {
    this.puntosAmarillosService.getPuntosAmarrillos().subscribe((data: any) => {
      this.puntosAmarrillos = data; 
    });
  }

   //----
  loadGrosorPeloComparacion(): void {
    this.grosorPeloComparacionService.getGrosorPeloComparacion().subscribe((data: any) => {
      this.grosorPeloComparacion = data; 
    });
  }

  loadPeloFinosFrontal(): void {
    this.peloFinosFrontalService.getPeloFinoFrontal().subscribe((data: any) => {
      this.peloFinosFrontal = data; 
    });
  }

  loadProporcionFrontalVsOccipital(): void {
    this.proporcionFrontalVsOccipitalService.getProporcionFrontalVsOccipital().subscribe((data: any) => {
      this.proporcionFrontalVsOccipital = data; 
    });
  }

  loadExistenciaPelosVellososMiniaturizado(): void {
    this.existenciaPelosVellososMiniaturizadoService.getExistenciaPelosVellososMiniaturizados().subscribe((data: any) => {
      this.existenciaPelosVellososMiniaturizado = data; 
    });
  }

  loadDecoloracionPiel(): void {
    this.decoloracionPielService.getDecoloracionesPiel().subscribe((data: any) => {
      this.decoloracionPiel = data; 
    });
  }


  loadGradoAlopecia(): void {
    this.gradoAlopeciaService.getGradosAlopecia().subscribe((data: any) => {
      this.gradoAlopecia = data; 
    });
  }  

  loadescalaAlopecia(): void {
    this.escalaAlopeciaService.getEscalasAlopecia().subscribe((data: any) => {
      this.escalaAlopecia = data; 
    });
  }    



}
