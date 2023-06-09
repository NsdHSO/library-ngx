import { NgxBtxDirective } from './ngx-btn.directive';
import {ElementRef, Renderer2} from "@angular/core";

describe('NgxBtnDirective', () => {
  it('should create an instance', () => {
    const directive = new NgxBtxDirective({} as ElementRef, {} as Renderer2);
    expect(directive).toBeTruthy();
  });
});
