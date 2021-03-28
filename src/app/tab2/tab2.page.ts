import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  score: number = 0;
  classification1: string = 'Please answer all of the questions!';
  classification2: string;
  classification3: string;
  classification4: string;
  q1: string = '1';
  q2: string;
  q3: string;
  q4: string;
  q5: string;

  scoring(){
    if (this.q1 == '2'){
      this.score = this.score + 1;
    } else if (this.q1 == '3'){
      this.score = this.score + 2;
    }
    if (this.q2 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q3 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q4 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q5 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.score == 0) {
      this.classification1 = "DECAF score: 0 point."
      this.classification2 = "Risk: low risk."
      this.classification3 = "Recommendation: routine management."
      this.classification4 = "In-hospital mortality rate: 0%"
    } else if (this.score == 1) {
      this.classification1 = "DECAF score: 1 point."
      this.classification2 = "Risk: low risk."
      this.classification3 = "Recommendation: routine management."
      this.classification4 = "In-hospital mortality rate: 1.5%"
    } else if (this.score == 2) {
      this.classification1 = "DECAF score: 2 point."
      this.classification2 = "Risk: intermediate risk."
      this.classification3 = "Recommendation: use clinician judgment re: disposition."
      this.classification4 = "In-hospital mortality rate: 5.4%"
    } else if (this.score == 3) {
      this.classification1 = "DECAF score: 3 point."
      this.classification2 = "Risk: high risk."
      this.classification3 = "Recommendation: consider escalation of care vs. palliative care."
      this.classification4 = "In-hospital mortality rate: 15.3%"
    } else if (this.score == 4) {
      this.classification1 = "DECAF score: 4 point."
      this.classification2 = "Risk: high risk."
      this.classification3 = "Recommendation: consider escalation of care vs. palliative care."
      this.classification4 = "In-hospital mortality rate: 31%"
    }  else if (this.score == 5) {
      this.classification1 = "DECAF score: 5 point."
      this.classification2 = "Risk: high risk."
      this.classification3 = "Recommendation: consider escalation of care vs. palliative care."
      this.classification4 = "In-hospital mortality rate: 40.5%"
    } else if (this.score == 6) {
      this.classification1 = "DECAF score: 6 point."
      this.classification2 = "Risk: high risk."
      this.classification3 = "Recommendation: consider escalation of care vs. palliative care."
      this.classification4 = "In-hospital mortality rate: 50%"
    }
  }
  checkq1(event) {
    this.q1 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq2(event) {
    this.q2 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq3(event) {
    this.q3 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq4(event) {
    this.q4 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq5(event) {
    this.q5 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  constructor(public alertController: AlertController) {
  }

}
