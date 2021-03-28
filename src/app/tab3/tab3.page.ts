import { ɵDomAdapter } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  q1: number = 0;
  q2: number = 0;
  q3: number = 0;
  q4: number = 0;
  q5: number = 0;
  q6: number = 0;
  q7: number = 0;
  q8: number = 0;
  q9: number = 0;
  q10: number = 0;
  q11: number = 0;
  q12: number = 0;
  q13: number = 0;
  q14: number = 0;
  q15: number = 0;
  q16: number = 0;
  score: number = 0;
  classification: string = 'No Depression';

  checks() {
    this.score = 0;
    this.score = this.score + this.q5 + this.q10 + this.q11 + this.q12 + this.q13 + this.q14;
    if (this.q1 == 3 || this.q2 == 3 || this.q3 == 3 || this.q4 == 3){this.score = this.score +3}
    else if (this.q1 == 2 || this.q2 == 2 || this.q3 == 2 || this.q4 == 2){this.score = this.score +2}
    else if (this.q1 == 1 || this.q2 == 1 || this.q3 == 1 || this.q4 == 1){this.score = this.score +1}
    if (this.q6 == 3 || this.q7 == 3 || this.q8 == 3 || this.q9 == 3){this.score = this.score +3}
    else if (this.q6 == 2 || this.q7 == 2 || this.q8 == 2 || this.q9 == 2){this.score = this.score +2}
    else if (this.q6 == 1 || this.q7 == 1 || this.q8 == 1 || this.q9 == 1){this.score = this.score +1}
    if (this.q15 > this.q16){
      this.score = this.score + this.q15;
    } else {
      this.score = this.score + this.q16;
    }
    this.score = this.score;
    if (this.score <= 5){
      this.classification = "No Depression";
    } else if (this.score <= 10){
      this.classification = "Mild Depression";
    } else if (this.score <= 15){
      this.classification = "Moderate Depression";
    } else if (this.score <= 20){
      this.classification = "Severe Depression";
    } else {
      this.classification = "Very Severe Depression";
    }
  }

  check1(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q1 = b;
    this.checks();
  }
  check2(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q2 = b;
    this.checks();
  }
  check3(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q3 = b;
    this.checks();
  }
  check4(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q4 = b;
    this.checks();
  }
  check5(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q5 = b;
    this.checks();
  }
  check6(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q6 = b;
    this.checks();
  }
  check7(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q7 = b;
    this.checks();
  }
  check8(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q8 = b;
    this.checks();
  }
  check9(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q9 = b;
    this.checks();
  }
  check10(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q10 = b;
    this.checks();
  }
  check11(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q11 = b;
    this.checks();
  }
  check12(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q12 = b;
    this.checks();
  }
  check13(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q13 = b;
    this.checks();
  }
  check14(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q14 = b;
    this.checks();
  }
  check15(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q15 = b;
    this.checks();
  }
  check16(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q16 = b;
    this.checks();
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
