import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators'
 
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  newsDetails: any = [];

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const routeUrl = this.router.url;
    const id: number = parseInt(routeUrl.split('/')[routeUrl.split('/').length - 1]);
    this.getDetails(id);
  }

  public getDetails(id): void {
    const param = {id: id};
    this.httpClient.get('http://localhost:3000/getNewsdetails', {params: param})
    .subscribe(res => {
      if (res['code'] === 200) {
        this.newsDetails = res['data'];
      }
    })
  }
}
