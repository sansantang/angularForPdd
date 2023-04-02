import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent, HorizontalGridComponent, ImageSliderComponent, ScrollLableTabComponent } from './share';



@NgModule({
  declarations: [    
    ScrollLableTabComponent, 
    HeaderComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports:[
    CommonModule,
    FormsModule,
    ScrollLableTabComponent, 
    HeaderComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ]
})
export class SharedModule { }
