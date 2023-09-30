import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLeitoComponent } from './criar-leito.component';

describe('CriarLeitoComponent', () => {
  let component: CriarLeitoComponent;
  let fixture: ComponentFixture<CriarLeitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarLeitoComponent]
    });
    fixture = TestBed.createComponent(CriarLeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
