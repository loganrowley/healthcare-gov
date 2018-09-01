import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ImgTransitionComponent } from './img-transition/img-transition.component';
import { FooterComponent } from './footer/footer.component';
import { NewsBarComponent } from './news-bar/news-bar.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: 'navbar',
    component: NavBarComponent
  },
  {
    path: 'action-bar',
    component: ActionBarComponent
  },
  {
    path: 'img-transition',
    component: ImgTransitionComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'news-bar',
    component: NewsBarComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
