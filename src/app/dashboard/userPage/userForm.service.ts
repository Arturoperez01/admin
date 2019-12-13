import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { PreguntaFormValidatorsService } from './pregunta-form-validators.service';
import { RolesService} from '../../_services/roles.service';
import { Roles } from '../../_models/roles/roles'
//import { IExamenFormInterface, IRespuestaVOFEnum, IRespuestaSeleccionEnum, PreguntaTipoEnum, IRespuestaItem, IPreguntaItem } from './examen-form.interface';
//import { identifierModuleUrl } from '@angular/compiler';

//const GLOBAL =  require('./../../assets/cunix.json')
@Injectable()
export class UserFormService {
    
    public availableRespuesta;//= [...Object.values(IRespuestaVOFEnum)];
    public form: FormGroup;

  constructor(
    //private preguntaValidatorsService: PreguntaFormValidatorsService,
    private fb: FormBuilder,
    private rolesSercvicio: RolesService
    //, public _service: Services
  ) {
    this.form = this.fb.group({
        _id: [],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        username: ['', Validators.required],
        roles: ['', Validators.required],
        servicios: ['', Validators.required],
        perfiles: this.fb.array([])
    }/*, { validator: this.preguntaValidatorsService.formValidator()  }//*/
    );
  }
  
    
    getRoles() {
        return this.rolesSercvicio.getAll()
    };    

    
    //*/
}
