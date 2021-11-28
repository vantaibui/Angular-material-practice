import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appActiveEffect]',
})
export class ActiveEffectDirective {
  constructor(private _element: ElementRef) {
    console.log(_element.nativeElement);
  }
}
