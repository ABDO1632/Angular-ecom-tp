import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingProductsSectionComponent } from './trending-products-section.component';

describe('TrendingProductsSectionComponent', () => {
  let component: TrendingProductsSectionComponent;
  let fixture: ComponentFixture<TrendingProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingProductsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
