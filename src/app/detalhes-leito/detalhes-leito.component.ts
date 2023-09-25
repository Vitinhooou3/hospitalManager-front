import { Component, OnInit } from '@angular/core';
import { leito } from '../leito';
import { ActivatedRoute } from '@angular/router';
import { LeitoService } from '../leito.service';

@Component({
  selector: 'app-detalhes-leito',
  templateUrl: './detalhes-leito.component.html',
  styleUrls: ['./detalhes-leito.component.css']
})
export class DetalhesLeitoComponent implements OnInit {
  id: number = 0 
  leitos: leito = new leito()

  constructor(private route: ActivatedRoute, private leitosService: LeitoService){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id']

      this.leitos = new leito()
      this.leitosService.getLeitoById(this.id).subscribe(data =>{
        this.leitos = data
      })
  } 

}
