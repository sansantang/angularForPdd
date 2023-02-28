import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TopMenu } from 'src/app/Interface/TopMenu';


@Component({
  selector: 'app-scroll-lable-tab',
  templateUrl: './scroll-lable-tab.component.html',
  styleUrls: ['./scroll-lable-tab.component.css']
})
export class ScrollLableTabComponent {
  selectIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter<TopMenu>();
  handleSelected(index: number){
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }
}
