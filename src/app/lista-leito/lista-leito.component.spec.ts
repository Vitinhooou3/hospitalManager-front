import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLeitoComponent } from './lista-leito.component';

describe('ListaLeitoComponent', () => {
  let component: ListaLeitoComponent;
  let fixture: ComponentFixture<ListaLeitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLeitoComponent]
    });
    fixture = TestBed.createComponent(ListaLeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
