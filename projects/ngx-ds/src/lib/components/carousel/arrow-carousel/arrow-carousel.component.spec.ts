import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowCarouselComponent } from './arrow-carousel.component';

fdescribe('ArrowCarouselComponent', () => {
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
  it("should set disabled to false", () => {
    const element = fixture.nativeElement.querySelector(`[data-test=arrows]`)
    fixture.detectChanges()
    expect(element.disabled).toBeFalse()
  });
  it("should set disabled to true", () => {
    const element = fixture.nativeElement.querySelector(`[data-test=arrows]`)
    component.disabledArrows = true
    fixture.detectChanges()
    expect(element.disabled).toBeTrue()
  });
});
