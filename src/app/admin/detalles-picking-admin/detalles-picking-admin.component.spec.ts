import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPickingAdminComponent } from './detalles-picking-admin.component';

describe('DetallesPickingAdminComponent', () => {
  let component: DetallesPickingAdminComponent;
  let fixture: ComponentFixture<DetallesPickingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPickingAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPickingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
