import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVerificadoresAdminComponent } from './lista-verificadores-admin.component';

describe('ListaVerificadoresAdminComponent', () => {
  let component: ListaVerificadoresAdminComponent;
  let fixture: ComponentFixture<ListaVerificadoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVerificadoresAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVerificadoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
