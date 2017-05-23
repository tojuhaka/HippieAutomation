import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from "@angular/http";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  icons: string[];
  items: Array<{ target: string, message: string, icon: string }>;

  constructor(public messagesCtrl: NavController, public alertCtrl: AlertController,
              public navParams: NavParams, public http: Http) {
    this.selectedItem = navParams.get('item');

    this.icons = ['bookmark'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        target: 'Item ' + i,
        message: 'this is a test' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to send this message?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Send',
          handler: () => {
            console.log('Send');
          }
        }
      ]
    });
    confirm.present();
  }

  itemSend(item) {
    let url = "https://hipchat.<domain>.com/v2/room/testing_room/message";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer <token>');
    let options = new RequestOptions({headers: headers});
    let data = {
      message: item.message
    };

    this.http.post(url, JSON.stringify(data), options)
      .subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });

  }

  itemDelete(item) {
    this.showConfirm();
  }

  itemModify(item) {
    this.showConfirm();
  }

  onHold(event, item) {
    this.showConfirm();
  }

}
