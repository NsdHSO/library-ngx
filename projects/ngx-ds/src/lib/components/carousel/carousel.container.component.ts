import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowCarouselComponent } from './arrow-carousel/arrow-carousel.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RotateCarouselComponent } from './rotate-carousel/rotate-carousel.component';
import { Store } from '@ngrx/store';
import {
  rotateCarouselLeft, rotateCarouselRight
} from "./actions";


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
   * @param {Store} _store - The store instance
   */
  constructor(
    private readonly _brka: BreakpointObserver,
    private readonly _store: Store
  ) {}

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
  public rotate(isLeft: boolean): void {
    if (isLeft) {
      this._store.dispatch(rotateCarouselLeft());
    } else {
      this._store.dispatch(rotateCarouselRight());
    }
  }
}
