import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxJumbotron]',
  standalone: true,
})
export class JumbotronDirective {
  /**
   * The variant of the element.
   */
  @Input() variant?: 'PRIMARY' = 'PRIMARY';
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
        `${element.classList} none center rounded-lg hover:opacity-95 bg-blueGray-50 py-3 px-6 font-sans font-bold uppercase shadow-md shadow-primary active:bg-primary-200 transition-all hover:shadow-lg hover:shadow-primary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`
      );
    }

    this._renderer.setAttribute(
      element,
      'class',
      `s:w-full  md:w-fit relative md:block flex justify-center content-center middle ${
        element.classList
      } ${this.rounded === 'MD' ? '' : 'rounded-full'}`
    );
  }
}
