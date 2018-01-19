import { Component } from '@angular/core';

/**
 * app组件
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'c-root',
  template: `
     <router-outlet></router-outlet>
     <c-toast-box toastAnimation="fancy"></c-toast-box>
     <c-spin></c-spin>
  `
})
export class AppComponent {


}

