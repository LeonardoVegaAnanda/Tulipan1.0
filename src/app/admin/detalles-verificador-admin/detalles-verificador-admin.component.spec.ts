import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVerificadorAdminComponent } from './detalles-verificador-admin.component';

describe('DetallesVerificadorAdminComponent', () => {
  let component: DetallesVerificadorAdminComponent;
  let fixture: ComponentFixture<DetallesVerificadorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesVerificadorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesVerificadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
