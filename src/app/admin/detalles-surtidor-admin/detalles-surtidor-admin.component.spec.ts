import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSurtidorAdminComponent } from './detalles-surtidor-admin.component';

describe('DetallesSurtidorAdminComponent', () => {
  let component: DetallesSurtidorAdminComponent;
  let fixture: ComponentFixture<DetallesSurtidorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesSurtidorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesSurtidorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
