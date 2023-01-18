import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Main', url: '/main', icon: 'paper-plane' },
    { title: 'Settings', url: '/settings', icon: 'hammer' },
    { title: 'Log Out', url: '/sign-in', icon: 'exit' },
  ];
  constructor(private readonly router: Router) {}

  public logOut(): void {
    this.router.navigate(['/sign-in'])
  }
}
