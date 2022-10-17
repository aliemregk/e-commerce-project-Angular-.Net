import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryPanelComponent } from './main-category-panel.component';

describe('MainCategoryPanelComponent', () => {
  let component: MainCategoryPanelComponent;
  let fixture: ComponentFixture<MainCategoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCategoryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
