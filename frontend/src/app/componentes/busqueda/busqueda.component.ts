import { Component, OnInit, TemplateRef } from '@angular/core';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { EvaluacionService } from "../../services/evaluacion.service";
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
//----- para diagnostico: ---
import { EscalaAlopeciaItemService } from '../../services/escala-alopecia-item.service';
import { GradoAlopeciaService } from '../../services/grado-alopecia.service';
import { AreaSinPeloService } from '../../services/area-sin-pelo.service';
import { PuntosAmarillosService } from '../../services/puntos-amarillos.service';
import { GrosorPeloComparacionService } from '../../services/grosor-pelo-comparacion.service';
import { PeloFinosFrontalService } from '../../services/pelo-finos-frontal.service';
import { ProporcionFrontalVsOccipitalService } from '../../services/proporcion-frontal-vs-occipital.service';
import { ExistenciaPelosVellososMiniaturizadoService } from '../../services/existencia-pelos-vellosos-miniaturizado.service';
import { DecoloracionPielService } from '../../services/decoloracion-piel.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
  export class BusquedaComponent  implements OnInit {
    busquedaForm: any; // Objeto para almacenar el formulario de búsqueda en blanco
    bsValue = new Date();
    minDate = new Date();
    registros_evaluaciones: any[] = [];
    cargaSinBusqueda = true;
    modalRef?: BsModalRef;
    registro_id_eliminar = 0;    //registro a eliminar, inicial =0
//----- para diagnostico: ---
    escalaAlopeciaItems: any[] = []; // Lista de opciones para el control desplegable de escala_alopecia_items
    gradoAlopecia: any[] = [];
    areaSinPelos: any[] = [];
    puntosAmarrillos: any[] = [];
    grosorPeloComparacion: any[] = [];
    peloFinosFrontal: any[] = [];
    proporcionFrontalVsOccipital: any[] = [];
    existenciaPelosVellososMiniaturizado: any[] = [];
    decoloracionPiel: any[] = [];

    constructor(
      private evaluacionService: EvaluacionService,
      private localeService: BsLocaleService,
      private router: Router,
      private modalService: BsModalService,
      private escalaAlopeciaItemService: EscalaAlopeciaItemService,
      private gradoAlopeciaService:GradoAlopeciaService,
      private areaSinPeloService: AreaSinPeloService,
      private puntosAmarillosService: PuntosAmarillosService,
      private grosorPeloComparacionService: GrosorPeloComparacionService,
      private peloFinosFrontalService: PeloFinosFrontalService,
      private proporcionFrontalVsOccipitalService: ProporcionFrontalVsOccipitalService,
      private existenciaPelosVellososMiniaturizadoService: ExistenciaPelosVellososMiniaturizadoService,
      private decoloracionPielService: DecoloracionPielService       
      ) {
      defineLocale('es', esLocale);
      this.localeService.use('es');
    }

    ngOnInit() {
      // Cargar el formulario de búsuqeda en blanco al iniciar el componente
      this.busquedaForm = this.evaluacionService.getBlankBusquedaEvaluacion();  

      // this.minDate.setDate(this.minDate.getDate() -1);
      // this.busquedaForm.inputrango_fechas = [this.minDate, this.bsValue];

      //Cargar datos para diagnostico
      this.loadEscalaAlopeciaItems();
      this.loadGradoAlopecia();
      this.loadAreaSinPelo();
      this.loadPuntosAmarrillos();
      this.loadGrosorPeloComparacion();
      this.loadPeloFinosFrontal();
      this.loadProporcionFrontalVsOccipital();
      this.loadExistenciaPelosVellososMiniaturizado();
      this.loadDecoloracionPiel();
    }


    buscar() {
      this.cargaSinBusqueda = false;
      // Obtener los datos del formulario
      const codigoPaciente = this.busquedaForm.inputcodigo_paciente;
      const rangoFechas = this.busquedaForm.inputrango_fechas;

      const criteriosBusqueda = { codigoPaciente: codigoPaciente, rangoFechas: rangoFechas };
      // Enviar los datos al servicio
      this.evaluacionService.getEvaluacionSearch(criteriosBusqueda).subscribe(evaluaciones => {
        this.registros_evaluaciones = evaluaciones;
      });

    }

    editarRegistro(registro: any) {
      // Redirige a la otra página
      this.router.navigate([{ outlets: { secondary: ['formulario', registro.id] } }]);
    }
  
    eliminarRegistro(registro: any, template: TemplateRef<any>) {
      this.registro_id_eliminar = registro.id;      
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }

    confirm(): void {
      this.modalRef?.hide();

      // Eliminar el registro del servidor:
      this.evaluacionService.deleteEvaluacion(this.registro_id_eliminar).subscribe(resultado => {
        if (resultado) {
            this.buscar();
        }
      }); 

    }
   
    decline(): void {
      this.registro_id_eliminar = 0;
      this.modalRef?.hide();
    } 
//-----------------------------------------------
//----------Similar Calculo Diagnostico ---------
    generarDiagnostico(registro: any){
      const strGradoAlopecia = this.obtenerGradoAlopecia(registro);
      const strFraseGrado = "Y tiene un grado de Alopesia: " + strGradoAlopecia;

      const pesos = [
        this.getPesoPorId(registro.areas_sin_pelo_id, this.areaSinPelos),
        this.getPesoPorId(registro.puntos_amarillos_id, this.puntosAmarrillos),
        this.getPesoPorId(registro.grosor_pelo_comparacion_id, this.grosorPeloComparacion),
        this.getPesoPorId(registro.pelo_finos_frontal_id, this.peloFinosFrontal),
        this.getPesoPorId(registro.proporcion_frontal_vs_occipital_id, this.proporcionFrontalVsOccipital),
        this.getPesoPorId(registro.existencia_pelos_vellosos_miniaturizados_id, this.existenciaPelosVellososMiniaturizado),
        this.getPesoPorId(registro.decoloracion_piel_id, this.decoloracionPiel)
      ];

      const mayorPeso = Math.max(...pesos);

      // Genera la sugerencia basada en el mayor peso
      let strMensaje = '';
      if (mayorPeso === 0) {
        strMensaje = 'El paciente tiene una probabilidad muy baja de tener AGA.' + strFraseGrado;
      } else {
        strMensaje = `El paciente tiene una probabilidad de ${mayorPeso * 100}% de tener AGA.` + strFraseGrado;
      }

      return strMensaje;
    }

    getPesoPorId(id: number, array: any[]) {
      const elemento = array.find(item => item.id === id);
      return elemento ? elemento.peso_aga : 0;
    }

    obtenerGradoAlopecia(registro: any) {
      const escalaAlopeciaIdSeleccionado = registro.escala_alopecia_item_id; // Obtener el ID seleccionado en el control "Grado Alopecia"
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

    loadEscalaAlopeciaItems(): void {
      this.escalaAlopeciaItemService.getEscalaAlopeciaItems().subscribe((data: any) => {
        this.escalaAlopeciaItems = data; 
      });
    }

    loadGradoAlopecia(): void {
      this.gradoAlopeciaService.getGradosAlopecia().subscribe((data: any) => {
        this.gradoAlopecia = data; 
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

}
