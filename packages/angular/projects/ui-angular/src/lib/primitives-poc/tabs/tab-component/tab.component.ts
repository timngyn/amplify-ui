import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'amplify-tab-item',
  templateUrl: './tab.component.html',
})
export class AmplifyTabComponent {
  @Input() title: string;
  @Input() active = false;
  @Input() id: string;
  @Input() labelledById: string;
  @Input() tabIndex: number;
  @HostBinding('style.display') display = 'block'; // emulate div behavior
}
