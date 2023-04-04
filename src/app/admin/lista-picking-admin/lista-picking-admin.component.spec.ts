import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPickingAdminComponent } from './lista-picking-admin.component';

describe('ListaPickingAdminComponent', () => {
  let component: ListaPickingAdminComponent;
  let fixture: ComponentFixture<ListaPickingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPickingAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPickingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
