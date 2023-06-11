import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateCarouselComponent } from './rotate-carousel.component';

describe('RotateCarouselComponent', () => {
  let component: RotateCarouselComponent;
  let fixture: ComponentFixture<RotateCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RotateCarouselComponent]
    });
    fixture = TestBed.createComponent(RotateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
