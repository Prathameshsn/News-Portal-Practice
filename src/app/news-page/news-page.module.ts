// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatMenuModule } from '@angular/material/menu';

// Custom
import { NewsPageComponent } from './news-page.component';
import { NewsPageRoutingModule } from './news-page-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { PhotoGalaryComponent } from './photo-galary/photo-galary.component';

@NgModule({
  declarations: [NewsPageComponent, NewsListComponent, NewsDetailsComponent, PhotoGalaryComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    NewsPageRoutingModule
  ]
})
export class NewsPageModule { }
