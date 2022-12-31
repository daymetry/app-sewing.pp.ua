import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ProductsService } from '../service/products.service';

@Component({
    selector: 'app-add-products-list',
    templateUrl: 'add-products-list.html',
})
export class ModalAddProductsList implements OnInit {

    public item: any = {
        inid: '',
        tittle: '',
        description: '',
        color: '',
        material: '',
        prod: '',
        customer: '',
        count: '',
        deadline: '',
    }

    public colorItem: any = [];
    public materialItem: any = [];
    public materialItemSelected: any = [];
    public colorSelect = {};

    public prodItem: any = [];
    public prodSelect = {};

    constructor(
        public dialogRef: MatDialogRef<ModalAddProductsList>,
        private productsService: ProductsService,
        @Inject(MAT_DIALOG_DATA) public data,
    ) {}

    ngOnInit() {
        console.log(this.data)

        this.getProducts()
        this.getMaterials()
        this.getColors()
    }

    onNoClick(): void {
        console.log(this.item)

        this.dialogRef.close();
    }

    selectMaterial(itemP: any) {
        console.log(itemP)
        console.log(this.item.material)
        console.log(this.materialItem)
        // console.log(this.m_id)

        for (const item of this.materialItem) {

            console.log(item)

            if (item.m_id == itemP) {
                this.materialItemSelected.push(item)
            }
        }
    }

    delFromArray(itemP: any) {
        const localItem = [];

        for (const item of this.materialItemSelected) {
            if (item.m_id !== itemP.m_id) {
                localItem.push(item)
            }
        }

        this.materialItemSelected = localItem;
    }

    onSendClick(): void {
        console.log(this.item)
        console.log(this.materialItemSelected)
        this.productsService.postProduct({item: this.item, materialItemSelected: this.materialItemSelected}).subscribe({
            next: data => {
                console.log(data)
                this.dialogRef.close();

                // this.item.list = data || [];
            },
            error: error => {
                this.dialogRef.close();
                console.error('There was an error!', error);
            }
        })
    }


    selectType(item: any) {
        console.log(item)
        // this.item.type = item;
    }

    postTask(item: any) {
        console.log(this.item)
        this.productsService.postTask(item).subscribe({
            next: data => {
                console.log(data)
                // this.item.list = data || [];
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }


    getColors() {
        this.productsService.getColors().subscribe({
            next: data => {
                console.log(data)

                this.colorItem = data;

            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

    getMaterial() {
        this.productsService.getColors().subscribe({
            next: data => {
                console.log(data)

                this.colorItem = data;

            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }


    getProducts() {
        this.productsService.getMaterials().subscribe({
            next: data => {
                console.log(data)

                this.prodItem = data;

            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

    getMaterials() {
        this.productsService.getMaterials().subscribe({
            next: (data: any) => {
                console.log(data)

                this.materialItem = data;

            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }
}
