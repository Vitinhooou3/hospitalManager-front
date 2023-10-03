import { Component, OnInit } from '@angular/core';
import { leito } from '../leito';
import { Router } from '@angular/router';
import { LeitoService } from '../leito.service';

@Component({
  selector: 'app-detalhe-leito',
  templateUrl: './detalhe-leito.component.html',
  styleUrls: ['./detalhe-leito.component.css']
})
export class DetalheLeitoComponent implements OnInit {
  id : number
  leito : leito = new leito()
  
  leitos : leito[]
  constructor(
    private route : Router, 
    private leitoService: LeitoService

  )
  {
    this.id = 0
    this.leitos = []
  }

  
  getLeitos() {
    this.leitoService.getleitosList().subscribe(leitosList => {
      this.leitos = leitosList;
      console.log(this.leitos)
    })
  }



  ngOnInit() : void{
    this.getLeitos()
  }
  
  adicionarMedico()
  {
    this.route.navigate(['/criar-medico'])
  }

  adicionarPaciente()
  {
this.route.navigate(['/criar-paciente'])
  }

  adicionarLeito()
  {
this.route.navigate(['/criar-leito'])
  }

  mostrarPaciente()
  {
this.route.navigate(['/pacientes'])
  }
  mostrarMedicos()
  {
this.route.navigate(['/medicos'])
  }


}
