import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsDetails: any = [];

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const routeUrl = this.router.url;
    const category = routeUrl.split('/')[routeUrl.split('/').length - 1];
    // this.getNewsDetails(category);
  }

  getNewsDetails(category) {
    const param = {category: category};
    this.httpClient.get('http://localhost:3000/getnewslist', {params :param})
    .subscribe( res => {
      this.newsDetails = res['data'];
    })
  }
}
