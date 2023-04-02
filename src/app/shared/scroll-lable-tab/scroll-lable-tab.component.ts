import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { TopMenu } from 'src/app/Interface/TopMenu';


@Component({
  selector: 'app-scroll-lable-tab',
  templateUrl: './scroll-lable-tab.component.html',
  styleUrls: ['./scroll-lable-tab.component.css']
})
export class ScrollLableTabComponent implements OnInit,OnDestroy{
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

  ngOnDestroy(): void {
    console.log('8 组件销毁');
  }
}
