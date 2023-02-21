import { Component } from '@angular/core';

interface TopMemu {
  title: string,
  link?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pinduoduo';
  tabs: TopMemu[] = [{
    title: "热门"
  }, {
    title: "男装"
  }, {
    title: "手机"
  }];
}
