import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {Location} from '@angular/common';
import {StorageRecordItemsService} from './service/storage-record-items.service'
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-storage-record-items',
  templateUrl: './storage-record-items.component.html',
  styleUrls: ['./storage-record-items.component.css']
})
export class StorageRecordItemsComponent implements OnInit {
    public queryString = window.location.href;
    public queryIsString: any = false;


    public storageMaterail: any = {};
    public materials: any = [];
    public products: any = [];

    public graff: any = {}

  constructor(private storageRecordService: StorageRecordItemsService, private router: Router, public dialog: MatDialog, private location: Location ) { }

  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {


      this.getStorageItems();
      this.getMaterials();
      this.getProduts();

      this.queryIsString = window.location.href.split('/')[window.location.href.split('/').length - 2];


      console.log(this.queryIsString)

  }



    getStorageItems() {

        console.log(this.queryString.split('/')[window.location.href.split('/').length - 1]);
        this.storageRecordService.getStorageItemId(this.queryString.split('/')[window.location.href.split('/').length - 1]).subscribe({
            next: (data: any) => {
                console.log(data)
                this.storageMaterail = data[0];
                // this.router.navigate(['/storage'])
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }


    getMaterials() {

        console.log(this.queryString.split('/')[window.location.href.split('/').length - 1]);
        this.storageRecordService.getMaterialsStorage(this.queryString.split('/')[window.location.href.split('/').length - 1]).subscribe({
            next: (data: any) => {
                console.log(data)
                this.materials = data;
                // this.router.navigate(['/storage'])
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }


    getProduts() {

        console.log(this.queryString.split('/')[window.location.href.split('/').length - 1]);
        this.storageRecordService.getProductsStorage(this.queryString.split('/')[window.location.href.split('/').length - 1]).subscribe({
            next: (data: any) => {
                console.log(data)
                this.products = data;
                // this.router.navigate(['/storage'])
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

    delMaterial() {

        console.log(this.queryString.split('/')[window.location.href.split('/').length - 1]);
        this.storageRecordService.delStorageItems(this.queryString.split('/')[window.location.href.split('/').length - 1]).subscribe({
            next: (data: any) => {
                console.log(data)
                // this.router.navigate(['/storage'])
                this.location.back();
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

    delProduct() {

            console.log(this.queryString.split('/')[window.location.href.split('/').length - 1]);
            this.storageRecordService.delStorageItems(this.queryString.split('/')[window.location.href.split('/').length - 1]).subscribe({
                next: (data: any) => {
                    console.log(data)
                    // this.router.navigate(['/storage'])
                    this.location.back();
                },
                error: error => {
                    console.error('There was an error!', error);
                }
            })
        }

    backLink() {
        this.location.back();
    }

}
