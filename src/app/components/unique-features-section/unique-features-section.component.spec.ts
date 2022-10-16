import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueFeaturesSectionComponent } from './unique-features-section.component';

describe('UniqueFeaturesSectionComponent', () => {
  let component: UniqueFeaturesSectionComponent;
  let fixture: ComponentFixture<UniqueFeaturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueFeaturesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
