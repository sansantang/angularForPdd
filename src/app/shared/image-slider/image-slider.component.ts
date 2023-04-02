import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ImageSlider } from 'src/app/Interface/ImageSlider';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit,AfterViewInit {
/** 
   *@ViewChild 是一个选择器，用来查找要引用的 dom元素或者组件
   * ElementRef 是 dom 元素的一个包装类，因为 dom元素不是angular中的类，所以需要一个
   * 包装类以便在 angular中使用和标识其类型
   */
  //  @ViewChild('container') containerRef: ElementRef;
   @ViewChild('imageSlider', { static: true }) imgSlider!: ElementRef;
   @ViewChildren('img') imgs!: QueryList<ElementRef>;
   @Input() sliders: ImageSlider[] = [];
   @Input() silderHeight = '150px';
   @Input() intervalBySecond = 2;
  constructor(private r2:Renderer2) { }

  ngOnInit(): void {
    console.log(this.imgSlider)
  }

  ngAfterViewInit(): void {
    // console.log(this.imgSlider)
    // this.imgs.forEach(item => {
    //   this.r2.setStyle(item.nativeElement,'height','150px');
    // });
    
    let i = 0;
    setInterval(()=>{
      this.r2.setProperty(this.imgSlider.nativeElement,
        'scrollLeft',
        ((++i % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth)/this.sliders.length);
    }, this.intervalBySecond * 1000);
  }

  handlerEvent(even: any){
    console.log(even);
  }

}
