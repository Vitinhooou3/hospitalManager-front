import { Component } from '@angular/core';
import { medico } from '../medico';
import { MedicoService } from '../medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-medico',
  templateUrl: './criar-medico.component.html',
  styleUrls: ['./criar-medico.component.css']
})
export class CriarMedicoComponent {
  medico :medico = new medico()

  constructor(
    private medicoService: MedicoService, 
    private router: Router
  )
  {

  }

  postMedico()
  {
    this.medicoService.createMedicos(this.medico).subscribe(novoMedico => {
      this.medico = novoMedico
      console.log(this.medico)
    })
  }

  onSubmit()
  {
    console.log(this.medico)
    this.postMedico()
  }

  mudarRota()
  {
    this.router.navigate(['/medicos'])
  }

}
