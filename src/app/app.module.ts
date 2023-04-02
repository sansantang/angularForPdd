import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [ //那些属于本 NgModule 的组件、指令、管道。
    AppComponent
  ],
  imports: [      //依赖其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule //共享 module
  ],
  providers: [],  //服务
  bootstrap: [AppComponent], //应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。
})
export class AppModule { }
