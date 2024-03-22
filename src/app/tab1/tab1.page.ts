import { Component, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('myChart') myChart: any;

  ngAfterViewInit() {

    const options = {
      cutout: '70%', // Esto simula un gráfico doughnut reduciendo el radio del gráfico pie
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context: any) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              label += Math.round(context.parsed * 100) + '%';
              return label;
            }
          }
        }
      }
    };

    const ctx = this.myChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Gastos', 'Saldo'],
        datasets: [{
          label: 'Balance',
          data: [65,35],
          backgroundColor: [
            '#ee6c4d',
            '#bde0fe',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 0
        }]
      },
      options: options/* {
        plugins: {
          tooltip: {
            enabled: false
          },
          },
          radius: '90%', // Puedes ajustar este valor según tus necesidades
          innerRadius: '60%'
        }*/
      
    });
  }
}
