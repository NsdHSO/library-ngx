import { JumbotronDirective } from './jumbotron.directive';
import {ElementRef, Renderer2} from "@angular/core";

describe('JumbotronDirective', () => {
  it('should create an instance', () => {
    const directive = new JumbotronDirective({} as ElementRef,{} as Renderer2);
    expect(directive).toBeTruthy();
  });
});
