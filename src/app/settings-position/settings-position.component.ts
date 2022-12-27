import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {SettingsPositionService} from './service/settings-position.service';

@Component({
  selector: 'app-settings-position',
  templateUrl: './settings-position.component.html',
  styleUrls: ['./settings-position.component.css']
})
export class SettingsPositionComponent implements OnInit {

    public item: any = {
        list: []
    }
    constructor(private settingsPositionService: SettingsPositionService) { }


    ngOnInit() {
        this.getData();
    }

    getData() {
        this.settingsPositionService.getPosition();
        // @ts-ignore
        this.settingsPositionService.getPosition().subscribe({
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
