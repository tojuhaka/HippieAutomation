import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public messagesCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.icons = ['bookmark'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item # fsdafd sdffa sdfds af ds fads afds fsad fasd ffsdfds' + i,
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
    this.showConfirm();
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
