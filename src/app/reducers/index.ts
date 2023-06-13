import { isDevMode } from '@angular/core';
import { createReducer, MetaReducer, on } from '@ngrx/store';
import {
  getCarousel,
  rotateCarouselLeft,
  rotateCarouselRight,
} from '../actions';

export interface State {
  data: any[];
}

const initialData = {
  data: [
    {
      id: 1,
      name: 'John Doe',
      ranting: 25,
      icon: 'fa_brands:monero',
    },
    {
      id: 2,
      name: 'Jane Smith',
      ranting: 30,
      icon: 'fa_brands:monero',
    },
    {
      id: 3,
      name: 'David Johnson',
      ranting: 35,
      icon: 'fa_brands:monero',
    },
    {
      id: 4,
      name: 'Emily Brown',
      ranting: 28,
      icon: 'fa_brands:monero',
    },
    {
      id: 5,
      name: 'Michael Davis',
      ranting: 32,
      icon: 'fa_brands:monero',
    },
    {
      id: 6,
      name: 'Sarah Wilson',
      ranting: 29,
      icon: 'fa_brands:monero',
    },
    {
      id: 7,
      name: 'Robert Taylor',
      ranting: 31,
      icon: 'fa_brands:monero',
    },
    {
      id: 8,
      name: 'Jennifer Anderson',
      ranting: 27,
      icon: 'fa_brands:monero',
    },
    {
      id: 9,
      name: 'Christopher Martinez',
      ranting: 33,
      icon: 'fa_brands:monero',
    },
    {
      id: 10,
      name: 'Amanda Thompson',
      ranting: 26,
      icon: 'fa_brands:monero',
    },
  ],
};
export const reducers = createReducer(
  initialData,
  on(getCarousel, (args) => ({ ...args })),
  on(rotateCarouselLeft, (args) => {
    const first = args.data[0];
    const newData = args.data.slice(1);
    newData.push(first);
    return {
      ...args,
      data: newData,
    };
  }),
  on(rotateCarouselRight, (args) => {
    const lastElement = args.data[args.data.length - 1];
    let newArray = args.data.slice(0, args.data.length - 1);
    return {
      ...args,
      data: [lastElement, ...newArray],
    };
  })
);
export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
