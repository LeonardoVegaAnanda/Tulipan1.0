import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPickingUserComponent } from './lista-picking-user.component';

describe('ListaPickingUserComponent', () => {
  let component: ListaPickingUserComponent;
  let fixture: ComponentFixture<ListaPickingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPickingUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPickingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
