import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRegistrosAdminComponent } from './detalles-registros-admin.component';

describe('DetallesRegistrosAdminComponent', () => {
  let component: DetallesRegistrosAdminComponent;
  let fixture: ComponentFixture<DetallesRegistrosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRegistrosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesRegistrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
