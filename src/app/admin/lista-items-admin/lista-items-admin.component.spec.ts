import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemsAdminComponent } from './lista-items-admin.component';

describe('ListaItemsAdminComponent', () => {
  let component: ListaItemsAdminComponent;
  let fixture: ComponentFixture<ListaItemsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaItemsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
