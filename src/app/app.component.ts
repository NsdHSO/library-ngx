import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { getCarousel } from './actions';

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
  array$ = this._store.select((value: any) => {
    return value['cards'].data;
  });

  constructor(private readonly _store: Store) {}

  ngOnInit() {
    this._store.dispatch(getCarousel());
  }
}
