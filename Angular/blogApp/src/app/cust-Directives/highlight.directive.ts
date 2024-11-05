import { Directive } from '@angular/core';
import { Renderer2, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('#95958e')
  }
   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }   
  private highlight(color:string){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor',color)
  }

}
