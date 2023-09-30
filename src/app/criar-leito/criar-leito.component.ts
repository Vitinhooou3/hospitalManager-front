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
    private route: Router
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

  mudarRota(){
    this.route.navigate(['/home'])
  }
}
