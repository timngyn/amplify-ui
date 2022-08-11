import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AmplifyTabComponent } from './tab-component/tab.component';
import { AmplifyTabsComponent } from './tabs-component/tabs.component';

@NgModule({
  declarations: [AmplifyTabsComponent, AmplifyTabComponent],
  imports: [CommonModule],
  exports: [AmplifyTabsComponent, AmplifyTabComponent],
})
export class AmplifyTabsModule {}
