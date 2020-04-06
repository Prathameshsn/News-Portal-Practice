import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})

export class NewsPageComponent implements OnInit {
    constructor() {
        
    }
    ngOnInit() {
        this.temp()
    }
    temp () {
        setTimeout(() => {
            console.log('run');
        }, 1000)
    }
}
