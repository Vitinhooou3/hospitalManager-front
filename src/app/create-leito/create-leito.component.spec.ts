import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeitoComponent } from './create-leito.component';

describe('CreateLeitoComponent', () => {
  let component: CreateLeitoComponent;
  let fixture: ComponentFixture<CreateLeitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLeitoComponent]
    });
    fixture = TestBed.createComponent(CreateLeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
