import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApphover]'
})
export class Apphover {

  constructor(private renderer: Renderer2, private el: ElementRef) {}
@HostListener('mouseenter') onMouseEnter() {
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#ea4f28ff');
}
@HostListener('mouseleave') onMouseLeave() {
  this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor', );
}
}
