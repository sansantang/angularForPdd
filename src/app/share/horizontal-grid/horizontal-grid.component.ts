import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})


export class HorizontalGridComponent implements OnInit {

  // 1的普通绑定和2的双向绑定都行
  // @Input() username = '';
  // handuleInput(event:Event): void{
  //   this.username = (event.target as HTMLInputElement).value;
  // }
  

  // 3.（失败了，当前版本不行，本想使用 [(username)]）自定义get, set 方法
  private _username = '';
  @Output() usernameChange = new EventEmitter<string>();

  @Input()
  public get username() : string {
    return this._username;
  }
  
  public set username(username : string) {
    this._username = username;
    this.usernameChange.emit(username);
  }


  constructor() { }

  ngOnInit() {
  }
}
