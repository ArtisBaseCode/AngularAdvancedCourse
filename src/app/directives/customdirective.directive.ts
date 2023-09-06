import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]',
  host: {
    '(click)' : 'applyLogic()'
  }
})
export class CustomdirectiveDirective {

  private el: ElementRef | undefined;

  @Input() number = 0;
  @Input() divisibleBy = 1;

  constructor(el: ElementRef) { 
    this.el = el;
  }

  applyLogic() {
    if(this.number % this.divisibleBy === 0){
      if(this.el){
        this.el.nativeElement.style.color  = 'green'
      }
    }else{
      if(this.el){
        this.el.nativeElement.style.color  = 'red'
      }
    }
  }
}
