import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-galary',
  templateUrl: './photo-galary.component.html',
  styleUrls: ['./photo-galary.component.scss']
})
export class PhotoGalaryComponent implements OnInit {
  photos = []

  constructor() { }

  ngOnInit(): void {
    this.photos = [
      {url: '../../../assets/images/me.JPG'},
      {url: '../../../assets/images/no-image.png'}
    ]
  }

}
