import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
import { Router } from '@angular/router';
import { paciente } from '../paciente';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  pacientesList : any[]

  constructor(
    private paServ: PacientesService,
    private router : Router

  )
  {
    this.pacientesList = []
  }

  ngOnInit() {
    this.getPacientes()
  }

  getPacientes() {
    this.paServ.getPacientesList().subscribe(data => {
      this.pacientesList = data;
      console.log(data)
    })
  }
  

  mostrarMedico(){
    this.router.navigate(['/medicos'])
  }

  mostrarLeito()
  {
    this.router.navigate(['/detalhe-leito'])
  }

  adicionarPaciente()
  {
    this.router.navigate(['/criar-paciente'])
  }

  adicionarLeito()
  {
    this.router.navigate(['/criar-leito'])
  }

  adicionarMedico()
  {
    this.router.navigate(['/criar-Medico'])
  }

}


  

  
