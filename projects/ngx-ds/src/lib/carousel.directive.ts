import { AfterViewInit, Directive, Input } from '@angular/core';

@Directive({
  selector: '[libCarousel]',
  standalone: true,
})
export class CarouselDirective implements AfterViewInit {
  @Input('libCarousel') entities: HTMLDivElement | undefined;

  public ngAfterViewInit(): void {
    const doubleEntites = [...(this.entities?.children as any || [])];
    const getWidthWindow = window.innerWidth;

    const maxWidth = doubleEntites.reduce((maxWidth: number, element: any) => {
      const width = element.offsetWidth;
      return width > maxWidth ? width : maxWidth;
    }, 0);

    const lastViewIndex = Math.floor(getWidthWindow / maxWidth);
    const doubleDoubleEntites = [...doubleEntites];

    doubleDoubleEntites.splice(0, lastViewIndex - 3);
    console.log(doubleDoubleEntites)
    if (this.entities && doubleDoubleEntites.length > 0) {
      const fragment = document.createElement('div');
      for (const element of doubleDoubleEntites) {
        fragment.appendChild(element);
      }
      fragment.style.display = 'flex'
      this.entities.replaceWith(fragment);
    }
  }
}
