import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[liburgBtx]',
  standalone: true,
})
export class NgxBtxDirective implements OnInit {
  /**
   * The variant of the element.
   */
  @Input() variant?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DANGER' =
    'PRIMARY';
  /**
   * The Rounded of the element.
   */
  @Input() rounded?: 'FULL' | 'MD' = 'MD';

  /**
   * Constructs a new instance of NgxBtxDirective.
   */
  constructor(
    private readonly _elementRef: ElementRef,
    private readonly _renderer: Renderer2
  ) {
    // Constructorul directivei
  }

  ngOnInit() {
    this.applyCustomStyles();
  }

  /**
   * Applies custom background and text color styles to the element.
   * This method can be called to apply the styles.
   */
  public applyCustomStyles(): void {
    this.applyStyles();
  }

  /**
   * Applies custom background and text color styles to the element.
   * You can customize the background and color values as needed.
   */
  private applyStyles(): void {
    const element = this._elementRef.nativeElement;
    if (this.variant === 'PRIMARY') {
      this._renderer.setAttribute(
        element,
        'class',
        `${element.classList} none center rounded-lg hover:opacity-95 bg-primary py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary active:bg-primary-200 transition-all hover:shadow-lg hover:shadow-primary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`
      );
    }
    if (this.variant === 'SECONDARY') {
      this._renderer.setAttribute(
        element,
        'class',
        `${element.classList} none center rounded-lg hover:opacity-95 bg-secondary py-3 px-6 font-sans text-xs font-bold uppercase text-primary shadow-md shadow-primary transition-all hover:shadow-lg hover:shadow-primary focus:opacity-[0.95] active:opacity-[0.98] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`
      );
    }
    if (this.variant === 'DANGER') {
      this._renderer.setAttribute(
        element,
        'class',
        `${element.classList} none center rounded-lg hover:opacity-95 bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary transition-all hover:shadow-lg hover:shadow-primary focus:opacity-[0.95] active:opacity-[0.98] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`
      );
    }

    if (this.variant === 'TERTIARY') {
      this._renderer.setAttribute(
        element,
        'class',
        ` ${element.classList} inline-block rounded px-6 pb-2 pt-2.5 uppercase leading-normal text-xs font-bold font-sans text-primary transition hover:rounded-lg duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700`
      );
    }

    this._renderer.setAttribute(
      element,
      'class',
      `s:w-full  md:w-fit relative md:block flex justify-center content-center middle ${element.classList} ${this.rounded=== 'MD' ? '': 'rounded-full'}`
    );
  }
}
