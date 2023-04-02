import { AfterContentInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { ImageSlider } from './Interface/ImageSlider';
import { TopMenu } from './Interface/TopMenu';
import { ImageSliderComponent } from './shared/share';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('imageSlider') imgSilder!: ImageSliderComponent;
  title = 'pinduoduo';
  topMenus: TopMenu[] = [{
    title: '热门',
    link: ''
  },
  {
    title: '男装',
    link: ''
  },
  {
    title: '百货',
    link: ''
  },
  {
    title: '运动',
    link: ''
  },
  {
    title: '手机',
    link: ''
  },
  {
    title: '家纺',
    link: ''
  },
  {
    title: '食品',
    link: ''
  },
  {
    title: '电器',
    link: ''
  },
  {
    title: '鞋包',
    link: ''
  },
  {
    title: '汽车',
    link: ''
  },
  {
    title: '水果',
    link: ''
  },
  {
    title: '电脑',
    link: ''
  },
  {
    title: '内衣',
    link: ''
  },
  {
    title: '家装',
    link: ''
  },
  {
    title: '母婴',
    link: ''
  },
  {
    title: '美妆',
    link: ''
  },
  {
    title: '家具',
    link: ''
  }];
  backColor = "red";
  imageSliders: ImageSlider[] = [{
    imgUrl: 'https://img2.baidu.com/it/u=3202947311,1179654885&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1678726800&t=fae41a3006e297e0f4907a03e7b042c9',
    link: '',
    caption: ''
  }, {
    imgUrl: 'https://img0.baidu.com/it/u=981218435,2998857702&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1678726800&t=e0e0759e70fae96e4c5dde404bb22df7',
    link: '',
    caption: ''
  }, {
    imgUrl: 'https://img0.baidu.com/it/u=1273517628,1100314156&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1678726800&t=1c53f45731be4113abdb2d8632ea0caa',
    link: '',
    caption: ''
  }, {
    imgUrl: 'https://img2.baidu.com/it/u=1003272215,1878948666&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=150',
    link: '',
    caption: ''
  }, {
    imgUrl: 'https://img2.baidu.com/it/u=1010328615,2032873142&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=150',
    link: '',
    caption: ''
  }];
  username = 'ss';
  handleSelectedTab(topmenu: TopMenu) {
    const colors = ['red', 'blue', 'black'];
    const idx = Math.floor(Math.random() * 3);
    this.backColor = colors[idx];
    console.log(topmenu);
  }
  ngAfterViewInit(): void {
    console.log(this.imgSilder);

  }
}
