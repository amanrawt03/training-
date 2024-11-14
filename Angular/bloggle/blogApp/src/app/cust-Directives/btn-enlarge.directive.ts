import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBtnEnlarge]',
  standalone: true
})
export class BtnEnlargeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.enlarge();
  } 

  @HostListener('mouseleave') onMouseLeave() {
    this.normal();
  } 

  private enlarge() {
    // Apply a scale transform to enlarge the button
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)'); // Slightly enlarge the button
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.2s ease'); // Smooth transition
  }

  private normal() {
    // Revert to the original scale
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}
