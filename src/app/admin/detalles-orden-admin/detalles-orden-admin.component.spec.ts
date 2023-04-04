import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesOrdenAdminComponent } from './detalles-orden-admin.component';

describe('DetallesOrdenAdminComponent', () => {
  let component: DetallesOrdenAdminComponent;
  let fixture: ComponentFixture<DetallesOrdenAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesOrdenAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesOrdenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
