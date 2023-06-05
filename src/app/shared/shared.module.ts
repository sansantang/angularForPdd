import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent, HorizontalGridComponent, ImageSliderComponent, ScrollLableTabComponent } from './share';
import { AppGridItemDirective } from './directive/app-grid-item.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { DirectiveTestComponent } from './directive-test/directive-test.component';



@NgModule({
  declarations: [    
    ScrollLableTabComponent, 
    HeaderComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    AppGridItemDirective,
    HighlightDirective,
    UnlessDirective,
    DirectiveTestComponent
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
    HorizontalGridComponent,
    HighlightDirective,
    UnlessDirective,
    DirectiveTestComponent
  ]
})
export class SharedModule { }
