import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLeitoComponent } from './detalhes-leito.component';

describe('DetalhesLeitoComponent', () => {
  let component: DetalhesLeitoComponent;
  let fixture: ComponentFixture<DetalhesLeitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesLeitoComponent]
    });
    fixture = TestBed.createComponent(DetalhesLeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
