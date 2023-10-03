import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent implements OnInit {
  medicosList:  any[]

  constructor(  
    private medicoService : MedicoService,
    private router: Router
  )
  {
    this.medicosList = []
  }

  getMedicosList()
  {
    this.medicoService.getMedicosList().subscribe(medicos => {
    this.medicosList = medicos
    console.log(medicos)
    })
  }

  ngOnInit()
  {
    this.getMedicosList()
    console.log(this.medicosList)
  }

  adicionarMedico()
  {
    this.router.navigate(['/criar-medico'])
  }

  adicionarPaciente()
  {
    this.router.navigate(['/criar-paciente'])
  }

  adicionarLeito()
  {
this.router.navigate(['/criar-leito'])
  }

  mostrarPaciente()
  {
this.router.navigate(['/pacientes'])
  }

  mostrarLeitos()
  {
      this.router.navigate(['/detalhe-leito'])
  }


}
