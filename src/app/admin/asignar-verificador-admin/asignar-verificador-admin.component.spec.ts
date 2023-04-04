import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarVerificadorAdminComponent } from './asignar-verificador-admin.component';

describe('AsignarVerificadorAdminComponent', () => {
  let component: AsignarVerificadorAdminComponent;
  let fixture: ComponentFixture<AsignarVerificadorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarVerificadorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarVerificadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
