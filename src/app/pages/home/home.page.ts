import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform) { }

  ngOnInit() {
  }

  async showPlatform() {
    let text = 'I run on: ' + this.platform.platforms();
    let alert = await this.alertCtrl.create({
      header: 'Home',
      subHeader: text,
      buttons: ['OK']
    });
    await alert.present();
  }

}
