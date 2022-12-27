import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {ModalAddTask} from './modal/add-task';
import {DashboardService} from './service/dashboard.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    public item: any = {
        taskList: {
            all: [],
            storage: [],
            work: [],
        },
        notificationList: []
    }

    public notes = {
        all: [
            'Добавить нового пользывателя',
            'Прием материала',
            'Перезвонить на склад №2',
            'Должны перезвонить',
        ],
        storage: [
            'Проверить отчет',
            'Добавить нового пользывателя',
        ],
        work: [
            'Прием материала',
            'Перезвонить на склад №2',
            'Должны перезвонить',
        ]
    }
  constructor(public dialog: MatDialog, private dashboardService: DashboardService) { }

    openDialog(): void {

        const dialogRef = this.dialog.open(ModalAddTask, {
            data: {},
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

            this.getTasks();
        });

    }



    delAll(item: any) {
        this.notes.all = this.notes.all.filter((res: any) => {
            return res !== item
        });
    }
    delStorage(item: any) {
        this.notes.storage = this.notes.storage.filter((res: any) => {
            return res !== item
        });
    }
    delWork(item: any) {
        this.notes.work = this.notes.work.filter((res: any) => {
            return res !== item
        });
    }

  startAnimationForLineChart(chart) {
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

  startAnimationForBarChart(chart) {
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

      this.getTasks();





      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

  getTasks() {
        this.dashboardService.getTasks().subscribe({
            next: data => {
                console.log(data)

                this.item.taskList.all = [];
                this.item.taskList.storage = [];
                this.item.taskList.work = [];


                // @ts-ignore
                for (const item of data) {
                    // tslint:disable-next-line:triple-equals
                    if (item.type == 0) {
                        this.item.taskList.all.push(item);
                        // tslint:disable-next-line:triple-equals
                    } else if (item.type == 1) {
                        this.item.taskList.storage.push(item);
                        // tslint:disable-next-line:triple-equals
                    } else if (item.type == 2) {
                        this.item.taskList.work.push(item);
                    }
                }

            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
  }


}
