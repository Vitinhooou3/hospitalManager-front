import { Component } from '@angular/core';
import { leito } from '../leito';
import { LeitoService } from '../leito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-leito',
  templateUrl: './criar-leito.component.html',
  styleUrls: ['./criar-leito.component.css']
})
export class CriarLeitoComponent {

  leito : leito = new leito()

  constructor(
    private leitoService: LeitoService,
    private router: Router
  )
  {

  }



  postLeito()
  {
    this.leitoService.createLeito(this.leito).subscribe(novoLeito =>{
      console.log(novoLeito)
      this.leito = novoLeito
    })
  }

  onSubmit()
  {
    console.log(this.leito)
    this.postLeito()
  }

  mostrarMedicos()
  {
    this.router.navigate(['/medicos'])
  }

  adicionarPaciente()
  {
    this.router.navigate(['/criar-paciente'])
  }

  adicionarMedico()
  {
    this.router.navigate(['/criar-medico'])
  }

  mostrarLeitos()
  {
    this.router.navigate(['/home'])
  }

  mostrarPaciente()
  {
    this.router.navigate(['/pacientes'])
  }
}
