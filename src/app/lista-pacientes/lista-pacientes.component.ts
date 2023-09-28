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
  paciente : any
  pacientes : any[]
  httpClient: any;
  constructor(
    private paServ: PacientesService,
    private router : Router

  )
  {
    this.pacientes = []
  }

  ngOnInit() {
    this.getPacientes()
  }

  getPacientes() {
    this.paServ.getPacientesList().subscribe(data => {
      this.pacientes = data;
      console.log(data)
    })
  }
  

  mudarRota(){
    this.router.navigate(['/criar-paciente'])
  }


  postPaciente(paciente: paciente){
    this.paServ.createPaciente(paciente).subscribe(data => {
      this.paciente = data
    })
  }


  

  
}
