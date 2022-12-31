import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import {StorageRecordService} from './service/storage-record.service'
import {Router} from '@angular/router';
import {ModalAddProductsStorage} from './modal/add-products-storage';
import {ModalAddMaterialStorage} from './modal/add-material-storage';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-storage-record',
  templateUrl: './storage-record.component.html',
  styleUrls: ['./storage-record.component.css']
})
export class StorageRecordComponent implements OnInit {
    public queryString = window.location.href;
    public queryIsString: any = false;


    public storage: any = {};
    public materials: any = [];
    public products: any = [];

    public graff: any = {}

  constructor(private storageRecordService: StorageRecordService, private router: Router, public dialog: MatDialog ) { }

  ngOnInit() {


      this.getStorage();
      this.getMaterials();
      this.getProduts();

      this.queryIsString = window.location.href.split('/')[window.location.href.split('/').length - 2];


      console.log(this.queryIsString)
  }



    getStorage() {

        console.log(this.queryString.split('/')[window.location.href.split('/').length - 1]);
        this.storageRecordService.getStorageId(this.queryString.split('/')[window.location.href.split('/').length - 1]).subscribe({
            next: (data: any) => {
                console.log(data)
                this.storage = data[0];
                // this.router.navigate(['/storage'])
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }


    openDialogMaterial(): void {

        const dialogRef = this.dialog.open(ModalAddMaterialStorage, {
            data: {},
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

            this.getMaterials();
        });

    }


    openDialogProducts(): void {

        const dialogRef = this.dialog.open(ModalAddProductsStorage, {
            data: {},
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

            this.getProduts();
        });

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


    delStorage() {

        console.log(this.queryString.split('/')[window.location.href.split('/').length - 1]);
        this.storageRecordService.delStorage(this.queryString.split('/')[window.location.href.split('/').length - 1]).subscribe({
            next: (data: any) => {
                console.log(data)
                this.router.navigate(['/storage'])
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

    backLink() {
        this.router.navigate(['/storage'])
    }

}
