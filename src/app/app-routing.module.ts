import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ContentComponent } from './share/content/content.component';


const rootRouterConfig: Routes = [
  { path:'**', component: ContentComponent },
  // { path:'list/:id', component: ListComponent },
  { path:'list', loadChildren: ()=> import('./share/children-module/children-module.module').then(m=>m.ChildrenModuleModule) },
  { path:'content', component: ContentComponent },
  { path: 'children-module', loadChildren: () => import('./share/children-module/children-module.module').then(m => m.ChildrenModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)], //创建根路由模块
  exports: [RouterModule]
})
export class AppRoutingModule { }
 