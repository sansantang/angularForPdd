import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';



const rootRouterConfig: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)], //创建根路由模块
  exports: [RouterModule]
})
export class AppRoutingModule { }
 