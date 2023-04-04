import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarSurtidorAdminComponent } from './asignar-surtidor-admin.component';

describe('AsignarSurtidorAdminComponent', () => {
  let component: AsignarSurtidorAdminComponent;
  let fixture: ComponentFixture<AsignarSurtidorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarSurtidorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarSurtidorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
