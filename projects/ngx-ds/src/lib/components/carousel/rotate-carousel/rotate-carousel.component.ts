import {
  AfterViewInit, Component, Input, OnChanges, SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronDirective } from '../../../jumbotron.directive';
import {
  BreakpointObserver, Breakpoints
} from "@angular/cdk/layout";
import {CardComponent} from "../card/card.component";
import {
  animate, style, transition, trigger
} from "@angular/animations";

@Component({
  selector: 'rotate-carousel',
  standalone: true,
  imports: [CommonModule, JumbotronDirective, CardComponent],
  templateUrl: './rotate-carousel.component.html',
  styleUrls: ['./rotate-carousel.component.scss'],
  animations: [
    trigger('carouselItemAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class RotateCarouselComponent {
  @Input()
  items: any[] = [];
}
