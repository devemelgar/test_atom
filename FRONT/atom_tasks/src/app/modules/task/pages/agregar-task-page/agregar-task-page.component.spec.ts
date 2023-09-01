import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTaskPageComponent } from './agregar-task-page.component';

describe('AgregarTaskPageComponent', () => {
  let component: AgregarTaskPageComponent;
  let fixture: ComponentFixture<AgregarTaskPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarTaskPageComponent]
    });
    fixture = TestBed.createComponent(AgregarTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
