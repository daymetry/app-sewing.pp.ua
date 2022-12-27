import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { SettingsColorsService } from './service/settings-colors.service';

@Component({
  selector: 'app-settings-colors',
  templateUrl: './settings-colors.component.html',
  styleUrls: ['./settings-colors.component.css']
})
export class SettingsColorsComponent implements OnInit {

    public item: any = {
        list: []
    }
  constructor(private settingsColorsService: SettingsColorsService) { }


  ngOnInit() {
      this.getData();
  }

  getData() {
      this.settingsColorsService.getColor();
      // @ts-ignore
      this.settingsColorsService.getColor().subscribe({
          next: data => {
             this.item.list = data || [];
          },
          error: error => {
              console.error('There was an error!', error);
          }
      })
  }
}
