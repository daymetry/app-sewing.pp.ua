import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {OrdersRecordService} from './service/orders-record.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-orders-record',
  templateUrl: './orders-record.component.html',
  styleUrls: ['./orders-record.component.css']
})
export class OrdersRecordComponent implements OnInit {
    public queryString = window.location.href;
    public queryIsString: any = false;

    public storage: any[] = [
        {
            id: 1,
            name: 'Карпенко И.',
            materials: 10,
            products: 89
        },
        {
            id: 2,
            name: 'Михеев А.',
            materials: 425,
            products: 20
        },
        {
            id: 3,
            name: 'Онуфрий',
            materials: 242,
            products: 12
        }
    ];

    public graff: any = {}

  constructor(private ordersRecordService: OrdersRecordService, private router: Router) { }
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

      this.queryIsString = window.location.href.split('/')[window.location.href.split('/').length - 2];

      console.log(this.queryIsString)

      this.storage.map((res: any) => {
          if (!this.graff[res.name]) {
              this.graff[res.name] = {};
              this.graff[res.name].materials = res.materials;
              this.graff[res.name].products = res.products;
          } else {
              this.graff[res.name] = {};
              this.graff[res.name].materials = this.graff[res.name].materials + res.materials;
              this.graff[res.name].products = this.graff[res.name].products + res.products;
          }
      })

      console.log([
          ...Object.keys(this.graff).map((res: any) => {
              return this.graff[res].materials;
          }),
          ...Object.keys(this.graff).map((res: any) => {
              return this.graff[res].products;
          }),
      ])

      console.log([
          ...Object.keys(this.graff).map((res: any) => {
              return res  + ' материал';
          }),
          ...Object.keys(this.graff).map((res: any) => {
              return res  + ' изделия';
          })
      ])

      const dataDailySalesChart: any = {
          labels:
              [
                  ...Object.keys(this.graff).map((res: any) => {
                      return res  + ' материал';
                  }),
                  ...Object.keys(this.graff).map((res: any) => {
                      return res  + ' изделия';
                  })
              ],
          series:
              [
                  ...Object.keys(this.graff).map((res: any) => {
                      return this.graff[res].materials;
                  }),
                  ...Object.keys(this.graff).map((res: any) => {
                      return this.graff[res].products;
                  }),
              ]
      };

      const datawebsiteViewsChart: any = {
          labels:
              [
                  ...Object.keys(this.graff).map((res: any) => {
                      return res  + ' материал';
                  }),
                  ...Object.keys(this.graff).map((res: any) => {
                      return res  + ' изделия';
                  })
              ],
          series:[
              [
                  ...Object.keys(this.graff).map((res: any) => {
                      return this.graff[res].materials;
                  }),
                  ...Object.keys(this.graff).map((res: any) => {
                      return this.graff[res].products;
                  }),
              ]
          ]
      };

      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      // const dataDailySalesChart: any = {
      //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      //     series: [
      //         [12, 17, 7, 17, 23, 18, 38]
      //     ]
      // };

      let chartHigh = 0;

      [
          ...Object.keys(this.graff).map((res: any) => {
              return this.graff[res].materials;
          }),
          ...Object.keys(this.graff).map((res: any) => {
              return this.graff[res].products;
          }),
      ].map((res: any) => {
          if (chartHigh < res) {
              chartHigh = res;
          }
      });

      const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: chartHigh + 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
          high: chartHigh + 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      // var datawebsiteViewsChart = {
      //   labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      //   series: [
      //     [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
      //
      //   ]
      // };


      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: chartHigh + 50,
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


    delOrder() {

        console.log(this.queryString.split('/')[window.location.href.split('/').length - 1]);
        this.ordersRecordService.delOrders(this.queryString.split('/')[window.location.href.split('/').length - 1]).subscribe({
            next: (data: any) => {
                console.log(data)
                this.router.navigate(['/orders'])
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }

    backLink() {
        this.router.navigate(['/orders'])
    }
}
