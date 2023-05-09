import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  public isHandset: Observable<BreakpointState>;
  public currentRoute: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);

    this.router.events.subscribe((event: Event) => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        console.log(event);
        let route = event.urlAfterRedirects;
        this.currentRoute = route.split('/')[1];
        console.log(this.currentRoute);
      }
    });
  }

  ngOnInit(): void {}
}
