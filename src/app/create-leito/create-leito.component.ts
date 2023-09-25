import { Component, OnInit } from '@angular/core';
import { LeitoService } from '../leito.service';
import { Router } from '@angular/router';
import { leito } from '../leito';


@Component({
  selector: 'app-create-leito',
  templateUrl: './create-leito.component.html',
  styleUrls: ['./create-leito.component.css']
})
export class CreateLeitoComponent implements OnInit {
  leitos: leito = new leito()

  constructor(private leitoService: LeitoService, private router: Router){}

  ngOnInit(): void {
      
  }

  saveLeito(){
    this.leitoService.createLeito(this.leitos).subscribe(data =>{
      console.log(data)
      this.goToLeitosList()
    },
    error => console.log(error))
  }

  goToLeitosList(){
    this.router.navigate(['/leitos'])
  }

  onSubmit(){
    console.log(this.leitos)
    this.saveLeito()
  }
  
}
