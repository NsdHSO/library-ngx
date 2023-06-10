import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArrowCarouselComponent
} from "./arrow-carousel/arrow-carousel.component";

@Component({
  selector: 'lib-carousel',
  standalone: true,
  imports: [CommonModule, ArrowCarouselComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {}
