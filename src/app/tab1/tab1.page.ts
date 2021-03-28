import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  score: number = 0;
  classification1: string = 'Please answer all of the questions!';
  classification2: string;
  classification3: string;
  classification4: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;

  scoring(){
    if (this.q1 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q2 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q3 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.score == 0){
      if (this.q4 == 'q11'){
        this.classification1 = 'Class I, BAP-65 score = 0';
        this.classification2 = 'The in-hospital mortality risk is 0.3%.';
        this.classification3 = 'The need for mechanical ventilation within 48 hours is 0.3%.';
        this.classification4 = 'Recommendation: routine management of COPD exacerbation';
      } else if (this.q4 == 'q12'){
        this.classification1 = 'Class II, BAP-65 score = 0';
        this.classification2 = 'The in-hospital mortality risk is 1.0%.';
        this.classification3 = 'The need for mechanical ventilation within 48 hours is 0.2%.';
        this.classification4 = 'Recommendation: routine management of COPD exacerbation';
      }
    } else if (this.score == 1){
      this.classification1 = 'Class III, BAP-65 score = 1';
      this.classification2 = 'The in-hospital mortality risk is 2.2%.';
      this.classification3 = 'The need for mechanical ventilation within 48 hours is 1.2%.';
      this.classification4 = 'Recommendation: consider early non-invasive ventilation and/or ICU care';
    } else if (this.score == 2){
      this.classification1 = 'Class IV, BAP-65 score = 2';
      this.classification2 = 'The in-hospital mortality risk is 6.4%.';
      this.classification3 = 'The need for mechanical ventilation within 48 hours is 5.5%.';
      this.classification4 = 'Recommendation: consider early non-invasive ventilation and/or ICU care';
    } else if (this.score == 3){
      this.classification1 = 'Class V, BAP-65 score = 3';
      this.classification2 = 'The in-hospital mortality risk is 14.1%.';
      this.classification3 = 'The need for mechanical ventilation within 48 hours is 12.4%.';
      this.classification4 = 'Recommendation: consider early non-invasive ventilation and/or ICU care';
    }
  }
  checkq1(event) {
    this.q1 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq2(event) {
    this.q2 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq3(event) {
    this.q3 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq4(event) {
    this.q4 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
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
