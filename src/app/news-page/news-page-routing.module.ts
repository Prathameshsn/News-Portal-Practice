import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './news-page.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { PhotoGalaryComponent } from './photo-galary/photo-galary.component';

const routes: Routes = [
  {path: '', component: NewsPageComponent,
    children: [
      {path: '', redirectTo: 'country'},
      {path: 'country', component: NewsListComponent},
      {path: 'entertaintment', component: NewsListComponent},
      {path: 'sports', component: NewsListComponent},
  
      {path: 'details/:id', component: NewsDetailsComponent},
      {path: 'photo-galary', component: PhotoGalaryComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPageRoutingModule { }
