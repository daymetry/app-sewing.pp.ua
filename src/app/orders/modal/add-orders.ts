import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { OrdersService } from '../service/orders.service';
@Component({
    selector: 'app-add-orders',
    templateUrl: 'add-orders.html',
})
export class ModalAddOrders implements OnInit {

    public item: any = {
        tittle: '',
        description: '',
        color: '',
        prod: '',
        customer: '',
        count: '',
        deadline: '',
    }

    public colorItem: any = [];
    public colorSelect = {};

    public prodItem: any = [];
    public prodSelect = {};

    constructor(
        public dialogRef: MatDialogRef<ModalAddOrders>,
        private ordersService: OrdersService,
        @Inject(MAT_DIALOG_DATA) public data,
    ) {}

    ngOnInit() {
        console.log(this.data)

        this.getProducts()
        this.getColors()
    }

    onNoClick(): void {
        console.log(this.item)

        this.dialogRef.close();
    }


    formateData() {
        // this.item.deadline

        if (this.item.deadline.length === 3 && this.item.deadline[2] !== '.') {
            this.item.deadline = this.item.deadline[0] + this.item.deadline[1] + '.' + this.item.deadline[2];
        } else if (this.item.deadline.length === 6 && this.item.deadline[5] !== '.') {
            this.item.deadline = this.item.deadline[0] + this.item.deadline[1] + this.item.deadline[2]  + this.item.deadline[3]  + this.item.deadline[4] + '.' + this.item.deadline[5];
        } else if (this.item.deadline.length > 9) {
            this.item.deadline =
                this.item.deadline[0] + this.item.deadline[1] + this.item.deadline[2] + this.item.deadline[3]  + this.item.deadline[4] + this.item.deadline[5] +
                this.item.deadline[6] + this.item.deadline[7] + this.item.deadline[8] + this.item.deadline[9];
        }

        if (Number(this.item.deadline[0] + this.item.deadline[1]) < 0 || Number(this.item.deadline[0] + this.item.deadline[1]) > 31) {
            this.item.deadline = '2' + this.item.deadline[1] + this.item.deadline.substr(2, this.item.deadline.length);
            this.item.deadline = this.item.deadline[0] + '1' + this.item.deadline.substr(2, this.item.deadline.length);
        }

        if (Number(this.item.deadline[3] + this.item.deadline[4]) < 0 || Number(this.item.deadline[3] + this.item.deadline[4]) > 12) {
            this.item.deadline = this.item.deadline.substr(0, 3) + '1' + this.item.deadline[4];
            this.item.deadline = this.item.deadline.substr(0, 3) + this.item.deadline[3] + '2';
        }

        if (Number(this.item.deadline[6] + this.item.deadline[7] + this.item.deadline[8] + this.item.deadline[9]) < 1970
        || Number(this.item.deadline[6] + this.item.deadline[7] + this.item.deadline[8] + this.item.deadline[9]) > 2400) {
            this.item.deadline = this.item.deadline.substr(0, 6) + '2' + this.item.deadline[7] + this.item.deadline[8] + this.item.deadline[9];
            this.item.deadline = this.item.deadline.substr(0, 6) + this.item.deadline[6] + '0' + this.item.deadline[8] + this.item.deadline[9];
            this.item.deadline = this.item.deadline.substr(0, 6) + this.item.deadline[6] + this.item.deadline[7] + '2' + this.item.deadline[9];
            this.item.deadline = this.item.deadline.substr(0, 6) + this.item.deadline[6] + this.item.deadline[7] + this.item.deadline[8] + '2';
        }
    }


    onSendClick(): void {
        console.log(this.item)
        this.ordersService.postOrder(this.item).subscribe({
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
        this.ordersService.postTask(item).subscribe({
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
        this.ordersService.getColors().subscribe({
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
        this.ordersService.getProducts().subscribe({
            next: data => {
                console.log(data)

                this.prodItem = data;

            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }
}
