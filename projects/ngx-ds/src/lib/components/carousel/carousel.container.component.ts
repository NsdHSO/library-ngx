import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowCarouselComponent } from './arrow-carousel/arrow-carousel.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RotateCarouselComponent } from './rotate-carousel/rotate-carousel.component';

@Component({
  selector: 'lib-carousel',
  standalone: true,
  imports: [CommonModule, ArrowCarouselComponent, RotateCarouselComponent],
  templateUrl: './carousel.container.component.html',
  styleUrls: ['./carousel.container.component.scss'],
})
export class CarouselContainerComponent implements OnChanges {
  /**
   * Fake items array.
   * @type {any[]}
   */
  currentSlide = 0;

  /**
   * Input items array.
   * @type {any[]}
   */
  @Input() items: any[] = [];
  public fakeItems: any[] = [];

  /**
   * Creates an instance of CarouselContainerComponent.
   * @param {BreakpointObserver} _brka - The breakpoint observer.
   */
  constructor(private readonly _brka: BreakpointObserver) {}

  /**
   * Lifecycle hook that is called when any input property changes.
   * @param {SimpleChanges} changes - The changes object.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    this.fakeItems = changes['items'].currentValue;
  }

  /**
   * Rotates the carousel.
   * @param {boolean} isLeft - Indicates whether the rotation is to the left side.
   */
  public  rotate(isLeft: boolean): void {
    if (isLeft) {
      let first = this.items[0]
      this.items.splice(0, 1)
      this.items = [...this.items,first]
    } else {

      let last = this.items[this.items.length -1 ]
      this.items.splice(-1, 1)
      this.items = [last,...this.items]
    }
  }
}
