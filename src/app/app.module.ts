import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLeitoComponent } from './create-leito/create-leito.component';
import { UpdateLeitoComponent } from './update-leito/update-leito.component';
import { DetalhesLeitoComponent } from './detalhes-leito/detalhes-leito.component';
import { ListaLeitoComponent } from './lista-leito/lista-leito.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    CreateLeitoComponent,
    UpdateLeitoComponent,
    DetalhesLeitoComponent,
    ListaLeitoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
