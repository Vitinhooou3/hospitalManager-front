import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeitoComponent } from './update-leito.component';

describe('UpdateLeitoComponent', () => {
  let component: UpdateLeitoComponent;
  let fixture: ComponentFixture<UpdateLeitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLeitoComponent]
    });
    fixture = TestBed.createComponent(UpdateLeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
