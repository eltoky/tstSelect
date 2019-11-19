import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  tstObj: { key: string } = { key: 'a'};

  gameLst: Array<{key: string; value: string}> = [];

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {
    this.http.get('./assets/data.json').subscribe( (settings: any) => {
      this.gameLst = settings.gameLst;
    });

  }
  onChangeVal() {

  }
}
