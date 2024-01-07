import { Component } from '@angular/core';

// import shared components
import { HeaderComponent, FooterComponent, AnnouncementBannerComponent } from '../../shared';

@Component({
   selector: 'app-not-found-page',
   templateUrl: './not-found-page.component.html',
   styleUrl: './not-found-page.component.scss',
   standalone: true,
   imports: [HeaderComponent, FooterComponent, AnnouncementBannerComponent],
})
export class NotFoundPageComponent {}
