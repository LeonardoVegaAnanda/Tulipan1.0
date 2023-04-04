import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistrosAdminComponent } from './lista-registros-admin.component';

describe('ListaRegistrosAdminComponent', () => {
  let component: ListaRegistrosAdminComponent;
  let fixture: ComponentFixture<ListaRegistrosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegistrosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegistrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
