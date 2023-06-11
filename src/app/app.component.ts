import { Component, QueryList, ViewChildren } from '@angular/core';
import { of } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import {toSignal} from "@angular/core/rxjs-interop";

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
      ranting: 25,
      icon: 'fa_brands:monero'
    },
    {
      id: 2,
      name: 'Jane Smith',
      ranting: 30,
      icon: 'fa_brands:monero'
    },
    {
      id: 3,
      name: 'David Johnson',
      ranting: 35,
      icon: 'fa_brands:monero'
    },
    {
      id: 4,
      name: 'Emily Brown',
      ranting: 28,
      icon: 'fa_brands:monero'
    },
    {
      id: 5,
      name: 'Michael Davis',
      ranting: 32,
      icon: 'fa_brands:monero'
    },
    {
      id: 6,
      name: 'Sarah Wilson',
      ranting: 29,
      icon: 'fa_brands:monero'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      ranting: 31,
      icon: 'fa_brands:monero'
    },
    {
      id: 8,
      name: 'Jennifer Anderson',
      ranting: 27,
      icon: 'fa_brands:monero'
    },
    {
      id: 9,
      name: 'Christopher Martinez',
      ranting: 33,
      icon: 'fa_brands:monero'
    },
    {
      id: 10,
      name: 'Amanda Thompson',
      ranting: 26,
      icon: 'fa_brands:monero'
    },
  ]);

}
