import {createAction} from "@ngrx/store";

const prefix = '[Carousel]'

export const initCarousel = createAction(prefix + 'init')
export const getCarousel = createAction(prefix + 'get')
export const rotateCarouselLeft = createAction(prefix + 'rotate left')

export const rotateCarouselRight = createAction(prefix + 'rotate right')

