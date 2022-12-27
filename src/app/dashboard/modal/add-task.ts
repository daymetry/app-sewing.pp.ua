import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DashboardService } from '../service/dashboard.service';
@Component({
    selector: 'app-add-task',
    templateUrl: 'add-task.html',
})
export class ModalAddTask implements OnInit {

    public item = {
        name: '',
        type: 0
    }
    constructor(
        public dialogRef: MatDialogRef<ModalAddTask>,
        private dashboardService: DashboardService,
        @Inject(MAT_DIALOG_DATA) public data,
    ) {}

    ngOnInit() {
        console.log(this.data)
    }

    onNoClick(): void {
        console.log(this.item)

        this.dialogRef.close();
    }

    onSendClick(): void {
        console.log(this.item)
        this.dashboardService.postTask(this.item).subscribe({
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
        this.item.type = item;
    }

    postTask(item: any) {
        console.log(this.item)
        this.dashboardService.postTask(item).subscribe({
            next: data => {
                console.log(data)
                // this.item.list = data || [];
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }
}
