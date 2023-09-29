import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPacienteComponent } from './criar-paciente.component';

describe('CriarPacienteComponent', () => {
  let component: CriarPacienteComponent;
  let fixture: ComponentFixture<CriarPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPacienteComponent]
    });
    fixture = TestBed.createComponent(CriarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
