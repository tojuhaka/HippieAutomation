import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(public navCtrl: NavController) {

  }

  showPassword(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
