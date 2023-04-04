import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenesAdminComponent } from './lista-ordenes-admin.component';

describe('ListaOrdenesAdminComponent', () => {
  let component: ListaOrdenesAdminComponent;
  let fixture: ComponentFixture<ListaOrdenesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdenesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOrdenesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
