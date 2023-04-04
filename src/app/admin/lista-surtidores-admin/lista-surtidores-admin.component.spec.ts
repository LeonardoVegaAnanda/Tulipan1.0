import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSurtidoresAdminComponent } from './lista-surtidores-admin.component';

describe('ListaSurtidoresAdminComponent', () => {
  let component: ListaSurtidoresAdminComponent;
  let fixture: ComponentFixture<ListaSurtidoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSurtidoresAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSurtidoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
