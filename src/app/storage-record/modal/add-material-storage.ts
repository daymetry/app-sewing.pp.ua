import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { StorageRecordService } from '../service/storage-record.service';
@Component({
    selector: 'app-add-material-storage',
    templateUrl: 'add-material-storage.html',
})
export class ModalAddMaterialStorage implements OnInit {
    public queryString = window.location.href;

    public item: any = {
        tittle: '',
        materialid: '',
        count: '',
    }

    public colorItem: any = [];
    public materialsItem: any = [];
    public colorSelect = {};

    public prodItem: any = [];
    public prodSelect = {};

    constructor(
        public dialogRef: MatDialogRef<ModalAddMaterialStorage>,
        private storageRecordService: StorageRecordService,
        @Inject(MAT_DIALOG_DATA) public data,
    ) {}

    ngOnInit() {
        console.log(this.data)

        this.getMaterials()
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
        this.storageRecordService.postStorageMaterial({storageid: this.queryString.split('/')[window.location.href.split('/').length - 1], ...this.item}).subscribe({
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
        this.storageRecordService.postTask(item).subscribe({
            next: data => {
                console.log(data)
                // this.item.list = data || [];
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }


    getMaterials() {
        this.storageRecordService.getMaterials().subscribe({
            next: data => {
                console.log(data)

                this.materialsItem = data;

            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

}
