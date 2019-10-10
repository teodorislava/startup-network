import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ConnectionResolver } from './config/signalr'; 
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  { path: 'projects',
    component: ProjectsComponent
  },
  { path: 'teams',
    component: TeamsComponent,
    resolve: { connection: ConnectionResolver }
  },
  {
    path: 'profile/:id',
    component:ProfileComponent, 
    pathMatch: 'full'
  },
  {
    path: '', 
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
