import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLeitoComponent } from './lista-leito/lista-leito.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component';

const routes: Routes = [
  {path: 'home', component: ListaLeitoComponent},
  {path: 'criar-paciente', component: CriarPacienteComponent},
  {path: 'pacientes', component: ListaPacientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
