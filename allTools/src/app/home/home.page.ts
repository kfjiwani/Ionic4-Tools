import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
messages:any = [];
  constructor() {
    for (var i = 0; i<=50; i++)
    {
      this.messages.push({name:'new'})
  }

}
}
