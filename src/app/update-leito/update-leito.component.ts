import { Component, OnInit } from '@angular/core';
import { LeitoService } from '../leito.service';
import { leito } from '../leito';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-update-leito',
  templateUrl: './update-leito.component.html',
  styleUrls: ['./update-leito.component.css']
})
export class UpdateLeitoComponent implements OnInit {
  id: number = 0
  leito: leito = new leito()
  disponivel: boolean = true

  constructor(private leitoService: LeitoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id']

      this.leitoService.getLeitoById(this.id).subscribe(data =>{
        this.leito = data
      }, error => console.log(error))
  }

  goToLeitosList(){
    this.router.navigate(['/leitos'])
  }

  onSubmit(){
    this.leitoService.updateLeito(this.id, this.leito).subscribe(data => {
      this.goToLeitosList()
    }, error => console.log(error))
  }


}
