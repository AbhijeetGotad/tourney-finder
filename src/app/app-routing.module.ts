import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './module/landing-page/landing-page.component';
import { HomepageRootComponent } from './module/homepage-root/homepage-root.component';
import { UserHomeComponent } from './module/user-home/user-home.component';
import { CompetitionTabComponent } from './module/competition-tab/competition-tab.component';
import { CompetitionListComponent } from './module/competition-tab/competition-list/competition-list.component';
import { TurfTabComponent } from './module/turf-tab/turf-tab.component';
import { SettingsTabComponent } from './module/settings-tab/settings-tab.component';
import { MyListTabComponent } from './module/my-list-tab/my-list-tab.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'homeUser',
        pathMatch: 'full',
      },
      {
        path: 'homeUser',
        component: UserHomeComponent,
        // canActivate: [LoginGuardService],
      },
      {
        path: 'competitions-list',
        component: CompetitionTabComponent,
        // canActivate: [LoginGuardService],
        children: [
          {
            path: '',
            component: CompetitionListComponent,
            // canActivate: [LoginGuardService],
          },
          {
            path: 'details',
            component: CompetitionListComponent,
            // canActivate: [LoginGuardService],
          },
        ],
      },
      {
        path: 'my-competitions-list',
        component: MyListTabComponent,
        // canActivate: [LoginGuardService],
      },
      {
        path: 'turfs-list',
        component: TurfTabComponent,
        // canActivate: [LoginGuardService],
        children: [
          {
            path: '',
            component: CompetitionListComponent,
            // canActivate: [LoginGuardService],
          },
          {
            path: 'details',
            component: CompetitionListComponent,
            // canActivate: [LoginGuardService],
          },
        ],
      },
      {
        path: 'settings',
        component: SettingsTabComponent,
        // canActivate: [LoginGuardService],
      },
    ],
  },
  {
    path: '',
    component: HomepageRootComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
