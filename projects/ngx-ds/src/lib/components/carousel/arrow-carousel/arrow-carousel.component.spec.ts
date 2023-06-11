import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowCarouselComponent } from './arrow-carousel.component';

fdescribe('ArrowCarouselComponent', () => {
  let component: ArrowCarouselComponent;
  let fixture: ComponentFixture<ArrowCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArrowCarouselComponent],
    });
    fixture = TestBed.createComponent(ArrowCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Whole button', () => {
    it('should set disabled to false', () => {
      const element = fixture.nativeElement.querySelector(`[data-test=arrows]`);
      fixture.detectChanges();
      expect(element.disabled).toBeFalse();
    });
    it('should set disabled to true', () => {
      const element = fixture.nativeElement.querySelector(`[data-test=arrows]`);
      component.disabledArrows = true;
      fixture.detectChanges();
      expect(element.disabled).toBeTrue();
    });
  });

  describe('Arrow left', function () {
    it('should arrow left set disabled to false', () => {
      const element = fixture.nativeElement.querySelector(
        `[data-test=left-arrow]`
      );
      fixture.detectChanges();
      expect(element.disabled).toBeFalse();
    });
    it('should arrow left set disabled to true', () => {
      const element = fixture.nativeElement.querySelector(
        `[data-test=left-arrow]`
      );
      component.arrowLeftDisabled = true;
      fixture.detectChanges();
      expect(element.disabled).toBeTrue();
    });
  });
  describe('Arrow right', function () {
    it('should arrow right set disabled to true', () => {
      const element = fixture.nativeElement.querySelector(
        `[data-test=right-arrow]`
      );
      component.arrowRightDisabled = true;
      fixture.detectChanges();
      expect(element.disabled).toBeTrue();
    });
    it('should arrow right set disabled to false', () => {
      const element = fixture.nativeElement.querySelector(
        `[data-test=right-arrow]`
      );
      fixture.detectChanges();
      expect(element.disabled).toBeFalse();
    });
  });
});
