import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowCarouselComponent } from './arrow-carousel.component';

describe('ArrowCarouselComponent', () => {
  let component: ArrowCarouselComponent;
  let fixture: ComponentFixture<ArrowCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArrowCarouselComponent]
    });
    fixture = TestBed.createComponent(ArrowCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
