import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-personal-record',
  templateUrl: './personal-record.component.html',
  styleUrls: ['./personal-record.component.css']
})
export class PersonalRecordComponent implements OnInit {


  public personal: any[] = [
      {
          id: 1,
       name: 'Александрова Т.С',
       staff: 'Директор'
      },
      {
          id: 2,
          name: 'Кучма А.',
          staff: 'Бухалтер'
      },
      {
          id: 3,
          name: 'Александров В.',
          staff: 'Разнорабочий'
      },
      {
          id: 4,
          name: 'Бирса Н.',
          staff: 'Глажка'
      },
      {
          id: 5,
          name: 'Ругно В.',
          staff: 'Наладчик'
      },
      {
          id: 6,
          name: 'Опенько Т.',
          staff: 'Вязальщик'
      },
      {
          id: 7,
          name: 'Охряченко С.',
          staff: 'Вязальщик'
      },
      {
          id: 8,
          name: 'Костенко Л.',
          staff: 'Вязальщик'
      },
      {
          id: 9,
          name: 'Лазука Л.',
          staff: 'Вязальщик'
      },
      {
          id: 10,
          name: 'Пичугина Т.',
          staff: 'Вязальщик'
      },
      {
          id: 11,
          name: 'Литвинов А.',
          staff: 'Швеи'
      },
      {
          id: 12,
          name: 'Шабайкина Н.',
          staff: 'Швеи'
      },
      {
          id: 13,
          name: 'Диденко О.',
          staff: 'Швеи'
      },
  ];

  public graff: any = {}
  constructor() { }
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
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */


      this.personal.map((res: any) => {
          if (!this.graff[res.staff]) {
              this.graff[res.staff] = 1;
          } else {
              this.graff[res.staff] = this.graff[res.staff] + 1;
          }
      });

      console.log(this.graff)

      const dataDailySalesChart: any = {
          labels: Object.keys(this.graff).map((res: any) => {
              return res;
          }),
          series: [
              Object.keys(this.graff).map((res: any) => {
                  return this.graff[res]
              })
          ]
      };

      let chartHigh = 0;

      Object.keys(this.graff).map((res: any) => {
          return this.graff[res]
      }).map((res: any) => {
          if (chartHigh < res) {
              chartHigh = res;
          }
      });

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: chartHigh + 4, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);

      // this.personal.map((res: any) => {
      //     if (!this.graff[res.name]) {
      //         this.graff[res.name] = {};
      //         this.graff[res.name].materials = res.materials;
      //         this.graff[res.name].products = res.products;
      //     } else {
      //         this.graff[res.name] = {};
      //         this.graff[res.name].materials = this.graff[res.name].materials + res.materials;
      //         this.graff[res.name].products = this.graff[res.name].products + res.products;
      //     }
      // })

      // console.log([
      //     ...Object.keys(this.graff).map((res: any) => {
      //         return this.graff[res].materials;
      //     }),
      //     ...Object.keys(this.graff).map((res: any) => {
      //         return this.graff[res].products;
      //     }),
      // ])

      // console.log([
      //     ...Object.keys(this.graff).map((res: any) => {
      //         return res  + ' материал';
      //     }),
      //     ...Object.keys(this.graff).map((res: any) => {
      //         return res  + ' изделия';
      //     })
      // ])

      // const dataDailySalesChart: any = {
      //     labels:
      //         [
      //             ...Object.keys(this.graff).map((res: any) => {
      //                 return res  + ' материал';
      //             }),
      //             ...Object.keys(this.graff).map((res: any) => {
      //                 return res  + ' изделия';
      //             })
      //         ],
      //     series:
      //         [
      //             ...Object.keys(this.graff).map((res: any) => {
      //                 return this.graff[res].materials;
      //             }),
      //             ...Object.keys(this.graff).map((res: any) => {
      //                 return this.graff[res].products;
      //             }),
      //         ]
      // };

      // const datawebsiteViewsChart: any = {
      //     labels:
      //         [
      //             ...Object.keys(this.graff).map((res: any) => {
      //                 return res  + ' материал';
      //             }),
      //             ...Object.keys(this.graff).map((res: any) => {
      //                 return res  + ' изделия';
      //             })
      //         ],
      //     series:[
      //         [
      //             ...Object.keys(this.graff).map((res: any) => {
      //                 return this.graff[res].materials;
      //             }),
      //             ...Object.keys(this.graff).map((res: any) => {
      //                 return this.graff[res].products;
      //             }),
      //         ]
      //     ]
      // };


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
          high: chartHigh + 4, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);


      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: Object.keys(this.graff).map((res: any) => {
            return res;
        }),
        series: [

                Object.keys(this.graff).map((res: any) => {
                    return this.graff[res]
                })

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: chartHigh + 4,
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

}
