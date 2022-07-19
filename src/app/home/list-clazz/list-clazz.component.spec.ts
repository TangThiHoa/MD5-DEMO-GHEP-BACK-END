import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClazzComponent } from './list-clazz.component';

describe('ListClazzComponent', () => {
  let component: ListClazzComponent;
  let fixture: ComponentFixture<ListClazzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClazzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
