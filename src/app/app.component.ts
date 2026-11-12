import { Component} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // App pages (/cafe/...) show the footer inside their own scrolling area, so the page has a single scrollbar
  showFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showFooter = !event.urlAfterRedirects.startsWith('/cafe');
      }
    });
  }

  ngOnInit(): void {}

  
}
