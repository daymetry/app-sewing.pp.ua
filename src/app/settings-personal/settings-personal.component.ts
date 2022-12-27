import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {SettingsPersonalService} from './service/settings-personal.service';

@Component({
  selector: 'app-settings-personal',
  templateUrl: './settings-personal.component.html',
  styleUrls: ['./settings-personal.component.css']
})
export class SettingsPersonalComponent implements OnInit {

    public item: any = {
        list: []
    }
    constructor(private settingsPersonalService: SettingsPersonalService) { }


    ngOnInit() {
        this.getData();
    }

    getData() {
        this.settingsPersonalService.getPosition();
        // @ts-ignore
        this.settingsPersonalService.getPosition().subscribe({
            next: data => {
                console.log(data)
                this.item.list = data || [];
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

}
