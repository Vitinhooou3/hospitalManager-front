import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLeitoComponent } from './lista-leito/lista-leito.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component';
import { CriarLeitoComponent } from './criar-leito/criar-leito.component';
import { CriarMedicoComponent } from './criar-medico/criar-medico.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { DetalheLeitoComponent } from './detalhe-leito/detalhe-leito.component';

const routes: Routes = [
  {path: 'home', component: ListaLeitoComponent},
  {path: 'pacientes', component: ListaPacientesComponent},
  {path: 'medicos', component: ListaMedicosComponent},

  {path: 'criar-paciente', component: CriarPacienteComponent},
  {path: 'criar-leito', component: CriarLeitoComponent},
  {path: 'criar-medico', component: CriarMedicoComponent},

  {path: 'detalhe-leito', component: DetalheLeitoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
