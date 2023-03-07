import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { TopMenu } from 'src/app/Interface/TopMenu';


@Component({
  selector: 'app-scroll-lable-tab',
  templateUrl: './scroll-lable-tab.component.html',
  styleUrls: ['./scroll-lable-tab.component.css']
})
export class ScrollLableTabComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  selectIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backColor = "#fff";
  @Output() tabSelected = new EventEmitter<TopMenu>();
  handleSelected(index: number){
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }
  ngOnInit(): void {
    console.log("2 组件初始化");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1 @Input组件输入属性改变',changes);
  }
  ngDoCheck(): void {
    console.log('3 脏值检测');
  }
  ngAfterContentInit(): void {
    console.log('4 组件内容初始化');
    
  }
  ngAfterContentChecked(): void {
    console.log('5 组件内容的脏值检测');
  }
  ngAfterViewInit(): void {
    console.log('6 组件视图初始化');
    
  }
  ngAfterViewChecked(): void {
    console.log('7 组件视图脏值检测');
    
  }
  ngOnDestroy(): void {
    console.log('8 组件销毁');
  }
}
