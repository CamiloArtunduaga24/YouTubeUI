import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import homeData from '../../assets/data/home.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  videos = [];
  segmets: any[] = [];

  constructor() {
    this.segmets = [
      'All',
      'New to you',
      'Gaming',
      'Sitcoms',
      'Programming',
      'Documental',
      'Music'
    ].map((val) => ({
      title: val,
      selected: false
    }));

    setTimeout(() => {
      this.selectSegment(0);
      this.videos = homeData;
      console.log(this.videos);

    }, 1000);

  }

  selectSegment(index) {

    this.segmets.map((item) => (item.selected = false));
    this.segmets[index].selected = true;
  }

  doRefresh(event: RefresherCustomEvent) {

    setTimeout(() => {
      event.target.complete();
    }, 1500);

  }

}
