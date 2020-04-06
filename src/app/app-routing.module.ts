import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'news', loadChildren: () => import('./news-page/news-page.module').then(mod => mod.NewsPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
