// 4.1 自定义属性指令 
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // @Input() appHighlight = '';
  @Input() defaultColor = '';
  @HostBinding('style.background-color') @Input() appHighlight = '';
  constructor(private el: ElementRef, private r2: Renderer2) {
    //第1种： 直接操作ElementRef
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    //第2种： 推荐使用 renderer2 设置
    // this.r2.setStyle(this.el.nativeElement, "background-color", 'yellow');
   }
   
  //  @HostBinding('style.background-color') @Input() backgroundColor = this.appHighlight; 

   
  //  @HostListener('mouseenter') onMouseEnter() {
  //   // this.highlight(this.appHighlight);
  //   this.highlight(this.appHighlight || this.defaultColor || 'red');
  // }
  
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }
  
  // private highlight(color: string) {
  //   this.r2.setStyle(this.el.nativeElement, "background-color", color);
  // }

}


