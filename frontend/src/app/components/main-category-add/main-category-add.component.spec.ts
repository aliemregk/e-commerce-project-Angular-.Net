import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryAddComponent } from './main-category-add.component';

describe('MainCategoryAddComponent', () => {
  let component: MainCategoryAddComponent;
  let fixture: ComponentFixture<MainCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
