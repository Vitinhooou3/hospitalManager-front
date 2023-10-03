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


  paciente: paciente = new paciente()

  constructor(
    private rout: Router,
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

  onSubmit()
  {
    console.log(this.paciente)
    this.postPaciente()
  }




  mostrarPaciente()
  {
    this.rout.navigate(['/pacientes'])
  }

  mostrarMedicos()
  {
    this.rout.navigate(['/medicos'])
  }

  mostrarLeitos()
  {
    this.rout.navigate(['/home'])
  }

  adicionarMedico()
  {
    this.rout.navigate(['/criar-medico'])
  }

  adicionarLeito()
  {
    this.rout.navigate(['/criar-leito'])
  }


}
