import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { TrendingTopicsComponent } from './trending-topics/trending-topics.component';
import { SubcriptionVideosPageComponent } from './subcription-videos-page/subcription-videos-page.component';
import { MainVideosComponent } from './main-videos/main-videos.component';
import { MainSubComponent } from './main-sub/main-sub.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, LeftSideBarComponent, TrendingTopicsComponent,
    SubcriptionVideosPageComponent, MainVideosComponent, MainSubComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube_clone_angular';
}
