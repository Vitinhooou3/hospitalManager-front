import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { paciente } from '../paciente';
import { PacientesService } from '../pacientes.service';


@Component({
  selector: 'app-criar-paciente',
  templateUrl: './criar-paciente.component.html',
  styleUrls: ['./criar-paciente.component.css'],
})
export class CriarPacienteComponent {

  convenio: boolean = true

  paciente: paciente = new paciente()

  sexo : any[] =[
    {genero: "Masculino"},
    {genero: "Feminino"},
    {genero: "Não-binário"}
  ]
  constructor(
    private rout: Router,
    private http: HttpClient,
    private pacienteService : PacientesService
  )
  {
  }

  postPaciente()
  {
    this.pacienteService.createPaciente(this.paciente).subscribe(novoPaciente =>{
      console.log(novoPaciente)
      this.paciente = novoPaciente
    })
  }


  pacienteConvenio: boolean = true;

  onSubmit()
  {
    console.log(this.paciente)
    this.postPaciente()
  }




  mudarRota(){
    this.rout.navigate(['/pacientes'])
  }
}