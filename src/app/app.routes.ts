import { Routes } from '@angular/router';
import { MainVideosComponent } from './main-videos/main-videos.component';
import { SubcriptionVideosPageComponent } from './subcription-videos-page/subcription-videos-page.component';
import { MainSubComponent } from './main-sub/main-sub.component';
export const routes: Routes = [
    { path: "", component: MainVideosComponent },
    { path: "subs", component: MainSubComponent }
];
