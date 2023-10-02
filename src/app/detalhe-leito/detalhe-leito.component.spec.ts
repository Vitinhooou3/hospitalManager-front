import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheLeitoComponent } from './detalhe-leito.component';

describe('DetalheLeitoComponent', () => {
  let component: DetalheLeitoComponent;
  let fixture: ComponentFixture<DetalheLeitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheLeitoComponent]
    });
    fixture = TestBed.createComponent(DetalheLeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
