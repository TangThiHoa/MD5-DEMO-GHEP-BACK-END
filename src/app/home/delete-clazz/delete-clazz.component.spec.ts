import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClazzComponent } from './delete-clazz.component';

describe('DeleteClazzComponent', () => {
  let component: DeleteClazzComponent;
  let fixture: ComponentFixture<DeleteClazzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClazzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteClazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
