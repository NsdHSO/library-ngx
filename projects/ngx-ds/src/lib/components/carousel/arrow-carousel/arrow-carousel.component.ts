import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBtxDirective } from '../../../ngx-btn.directive';
import { MatIconModule } from '@angular/material/icon';

/**
 * Represents a arrow carousel component.
 */
@Component({
  selector: 'lib-arrow-carousel',
  standalone: true,
  imports: [CommonModule, NgxBtxDirective, MatIconModule],
  templateUrl: './arrow-carousel.component.html',
  styleUrls: ['./arrow-carousel.component.scss'],
})
export class ArrowCarouselComponent {
  /**
   * Indicates whether the left arrow button is disabled.
   * @type {boolean}
   */
  @Input() arrowLeftDisabled = false;

  /**
   * Indicates whether the right arrow button is disabled.
   * @type {boolean}
   */
  @Input() arrowRightDisabled = false;

  /**
   * Indicates whether the arrows are disabled.
   * @type {boolean}
   */
  @Input() disabledArrows = false;

  /**
   * Indicates whether the arrows are clicked.
   * @type {EventEmitter} send flag
   * if is true left side
   * if is false right side
   */
  @Output() sendTriggerValue = new EventEmitter<boolean>();
}
