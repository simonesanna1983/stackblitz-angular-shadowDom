import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child-app-component',
  template: `
    <div class="shadow-message">Inside Shadow DOM</div>
  `,
  styles: ['h2, .shadow-message { color: blue; }'],
})
export class ChildAppComponent {}
