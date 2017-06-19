import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { LoyaltyWalletPage } from '../loyaltywallet/loyaltywallet';
import { PromotionsPage } from '../promotions/promotions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PromotionsPage;
  tab2Root = LoyaltyWalletPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
