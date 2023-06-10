import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBtxDirective } from '../../../ngx-btn.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-arrow-carousel',
  standalone: true,
  imports: [CommonModule, NgxBtxDirective, MatIconModule],
  templateUrl: './arrow-carousel.component.html',
  styleUrls: ['./arrow-carousel.component.scss'],
})
export class ArrowCarouselComponent {
  @Input() arrowLeftDisabled = false;
  @Input() arrowRightDisabled = false;
}
