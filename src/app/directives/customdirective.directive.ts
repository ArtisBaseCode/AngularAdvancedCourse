import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]',
  host: {
    '(click)' : 'applyLogic()'
  }
})
export class CustomdirectiveDirective {

  @Input() number = 0;
  @Input() divisibleBy = 1;

  constructor() { }

}
