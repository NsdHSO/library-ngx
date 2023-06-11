import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselContainerComponent } from './carousel.container.component';

describe('CarouselComponent', () => {
  let component: CarouselContainerComponent;
  let fixture: ComponentFixture<CarouselContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselContainerComponent]
    });
    fixture = TestBed.createComponent(CarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
