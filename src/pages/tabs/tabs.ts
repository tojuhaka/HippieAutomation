import { Component } from '@angular/core';

import { AddPage } from '../add/add';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddPage;
  tab2Root = HomePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
