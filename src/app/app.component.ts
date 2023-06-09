import { Component, QueryList, ViewChildren } from '@angular/core';
import { of } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { CarouselDirective } from '../../projects/ngx-ds/src/lib/carousel.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'rotate(400deg)' + ' scale(.1)' + ' scale(0.1)',
        }),
        animate(
          '300ms ease-in',
          style({
            opacity: 1,
            transform: 'rotate(0) scale(1.5)',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({
            opacity: 0,
            transform: 'rotate(500deg) scale(0.1)',
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'library';
  test = 'bg-primary';
  public showButtons: any;

  array = of([
    {
      id: 1,
      name: 'John Doe',
      age: 25,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 30,
    },
    {
      id: 3,
      name: 'David Johnson',
      age: 35,
    },
    {
      id: 4,
      name: 'Emily Brown',
      age: 28,
    },
    {
      id: 5,
      name: 'Michael Davis',
      age: 32,
    },
    {
      id: 6,
      name: 'Sarah Wilson',
      age: 29,
    },
    {
      id: 7,
      name: 'Robert Taylor',
      age: 31,
    },
    {
      id: 8,
      name: 'Jennifer Anderson',
      age: 27,
    },
    {
      id: 9,
      name: 'Christopher Martinez',
      age: 33,
    },
    {
      id: 10,
      name: 'Amanda Thompson',
      age: 26,
    },
  ]);
  @ViewChildren(CarouselDirective) carouselItems:
    | QueryList<CarouselDirective>
    | any;

  scrollPrevious() {
    const currentIndex = this.getCurrentIndex();
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0) {
      const previousItem = this.carouselItems.toArray()[previousIndex];
      previousItem.scrollPrevious();
    }
  }

  scrollNext() {
    const currentIndex = this.getCurrentIndex();
    const nextIndex = currentIndex + 1;

    if (nextIndex < this.carouselItems.length) {
      const nextItem = this.carouselItems.toArray()[nextIndex];
      nextItem.scrollNext();
    }
  }

  private getCurrentIndex(): number {
    const activeItem = this.carouselItems.find((item : any) => item.isActive);
    return this.carouselItems.toArray().indexOf(activeItem);
  }
}
