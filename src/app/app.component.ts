import { Component, ViewEncapsulation } from '@angular/core';
import { ChildAppComponent } from './child-app.component';

@Component({
  selector: 'app-root',
  template: `  
    <child-app-component></child-app-component>
  `,
  styles: [
    `child-app-component {
      display: block; max-width: 500px; padding: 5px; margin: 5px 0;
    }`,
    'child-app-component { border: solid 2px blue; }',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {}
