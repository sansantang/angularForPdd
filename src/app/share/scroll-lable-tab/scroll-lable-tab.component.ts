import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TopMenu } from 'src/app/Interface/TopMenu';


@Component({
  selector: 'app-scroll-lable-tab',
  templateUrl: './scroll-lable-tab.component.html',
  styleUrls: ['./scroll-lable-tab.component.css']
})
export class ScrollLableTabComponent implements OnInit,OnChanges{
  selectIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backColor = "#fff";
  @Output() tabSelected = new EventEmitter<TopMenu>();
  handleSelected(index: number){
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }
  ngOnInit(): void {
    console.log("组件初始化");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('组件输入属性改变',changes);
  }
}
