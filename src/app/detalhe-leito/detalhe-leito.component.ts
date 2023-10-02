import { Component, OnInit } from '@angular/core';
import { leito } from '../leito';
import { ActivatedRoute, Route } from '@angular/router';
import { LeitoService } from '../leito.service';

@Component({
  selector: 'app-detalhe-leito',
  templateUrl: './detalhe-leito.component.html',
  styleUrls: ['./detalhe-leito.component.css']
})
export class DetalheLeitoComponent implements OnInit {
  id : number
  leito : leito = new leito()
  

  constructor(
    private route : ActivatedRoute, 
    private leitoService: LeitoService

  )
  {
    this.id = 0
  }

  getLeitoById()
  {
    this.id = this.route.snapshot.params['id']

    this.leito = new leito()
    this.leitoService.getLeitoById(this.id).subscribe(idLeito => {
      this.leito = idLeito
      console.log(this.leito)
    })

  }

  ngOnInit() : void{
    this.getLeitoById()
  }
  


}
