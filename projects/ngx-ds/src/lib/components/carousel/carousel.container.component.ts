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
export class CarouselContainerComponent implements OnChanges, AfterViewInit {
  /**
   * Fake items array.
   * @type {any[]}
   */
  fakeItems: any[] = [];

  /**
   * Input items array.
   * @type {any[]}
   */
  @Input() items: any[] = [];
  private leftRotations: any;
  private rightRotations: any;

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
   * Lifecycle hook that is called after the component's view has been fully initialized.
   */
  public ngAfterViewInit(): void {
    const screenWidth = window.innerWidth;
    const itemWidth = 320; // Lățimea unui element
    const maxVisibleItems = Math.floor(screenWidth / itemWidth);
    this.fakeItems = this.items.slice(0, maxVisibleItems);

    this._brka.observe('(min-width: 800px) and (max-width: 1000px)').subscribe((value) => {
      if (value.matches) {
        this.fakeItems = this.items.slice(0, 3);
      }
    });

    this._brka.observe('(min-width: 1001px)').subscribe((value) => {
      if (value.matches) {
        this.fakeItems = this.items.slice(0, maxVisibleItems);
      }
    });
  }


  /**
   * Rotates the carousel.
   * @param {boolean} isLeft - Indicates whether the rotation is to the left side.
   */
  public rotate(isLeft: boolean): void {
    if (isLeft) {
      // Rotate to the left side
      const lastItem = this.fakeItems.pop(); // Remove the last item
      this.fakeItems.unshift(lastItem); // Add the last item to the beginning
    } else {
      // Rotate to the right side
      const firstItem = this.fakeItems.shift(); // Remove the first item
      this.fakeItems.push(firstItem); // Add the first item to the end
    }
  }
}
