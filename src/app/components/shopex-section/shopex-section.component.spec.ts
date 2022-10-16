import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopexSectionComponent } from './shopex-section.component';

describe('ShopexSectionComponent', () => {
  let component: ShopexSectionComponent;
  let fixture: ComponentFixture<ShopexSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopexSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopexSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
