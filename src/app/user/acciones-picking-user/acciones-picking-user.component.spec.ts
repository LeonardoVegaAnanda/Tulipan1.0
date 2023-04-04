import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesPickingUserComponent } from './acciones-picking-user.component';

describe('AccionesPickingUserComponent', () => {
  let component: AccionesPickingUserComponent;
  let fixture: ComponentFixture<AccionesPickingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesPickingUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesPickingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
