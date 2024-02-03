import { Component } from '@angular/core';

// import the shared components
import { HeaderComponent, AnnouncementBannerComponent, FooterComponent, HeroComponent } from '../../shared';

@Component({
   selector: 'app-main-page',
   templateUrl: './main-page.component.html',
   styleUrl: './main-page.component.scss',
   standalone: true,
   imports: [HeaderComponent, AnnouncementBannerComponent, FooterComponent, HeroComponent],
})
export class MainPageComponent {}
