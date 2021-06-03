import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'app/services/api/user.service';
import Chart from 'chart.js';
import { Toast } from 'app/lib/toast';

const DEGREE_CRITERIA = {
  3: 'Ter Diploma de Mestrado',
  4: 'Ter Diploma de Doutorado',
}

const DEGREES = {
  1: 'Graduado',
  2: 'Pós-Graduado',
  3: 'Mestre',
  4: 'Doutor',
  5: 'Pós-Doutor'
}

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  @ViewChild('someInput', { static: false }) someInput: ElementRef;

  public userData: any;
  public userDegree: string;

  public userProgress: string;

  public requestingPromotion: boolean;

  public promotionCriteria: any;

  public canvas: any;

  constructor(private userService: UserService, private toast: Toast) { }

  ngOnInit() {

    this.initCharts();



    this.userService.getMe().subscribe(res => {

      this.userData = res.data
      this.userDegree = this.userData.Degrees[0] ? DEGREES[this.userData.Degrees[0].typeId] : null;

      this.userService.getNextRole().subscribe(res => {
        this.promotionCriteria = {
          degree: DEGREE_CRITERIA[res.data.degreeNeeded],
          score: `Ter ${res.data.scoreNeeded} pontos acumulados`,
          hasDegree: this.userData.Degrees[0] ? res.data.degreeNeeded === this.userData.Degrees[0].typeId : false,
          hasScore: this.userData.score >= res.data.scoreNeeded,
        }

        this.userProgress = (((this.userData.score * 50) / res.data.scoreNeeded) + (this.promotionCriteria.hasDegree ? 50 : 0)).toFixed(1);

        if (parseInt(this.userProgress) > 100) {
          this.userProgress = '100';
        }

        this.someInput.nativeElement.setAttribute('stroke-dasharray', `${this.userProgress}, 100`);

      });

    });




  }

  promotionRequest() {

    this.requestingPromotion = true;

    setTimeout(() => {
      this.userService.promotion({})
      .subscribe(res => {

        this.userData = res.data;

        this.toast.success('Parabéns, você foi promovido!');

        this.userService.getNextRole().subscribe(res => {
          this.promotionCriteria = {
            degree: DEGREE_CRITERIA[res.data.degreeNeeded],
            score: `Ter ${res.data.scoreNeeded} pontos acumulados`,
            hasDegree: this.userData.Degrees[0] ? res.data.degreeNeeded === this.userData.Degrees[0].typeId : false,
            hasScore: this.userData.score >= res.data.scoreNeeded,
          }

          this.userProgress = (((this.userData.score * 50) / res.data.scoreNeeded) + (this.promotionCriteria.hasDegree ? 50 : 0)).toFixed(1);

          if (parseInt(this.userProgress) > 100) {
            this.userProgress = '100';
          }

          this.someInput.nativeElement.setAttribute('stroke-dasharray', `${this.userProgress}, 100`);

        });
        this.requestingPromotion = false;

      },
      () => {
        this.requestingPromotion = false;

      });
    }, 3000);

  }

  initCharts() {
    var speedCanvas = document.getElementById("speedChart");

    var dataFirst = {
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [dataFirst]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });


  }
}
