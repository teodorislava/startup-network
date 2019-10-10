import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './store/effects';
import { RootReducer } from './store/reducers';
import { CookieService } from 'ngx-cookie-service';
import { SignalRModule } from 'ng2-signalr';
import { SignalRConfiguration } from 'ng2-signalr';
import { AngularFileUploaderModule } from 'angular-file-uploader';


import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginService } from './services/login.service';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ModalModule } from 'ngx-bootstrap';
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { TeamsService } from './services/teams.service';
import { ConnectionResolver } from './config/signalr';
import { MessageService } from './services/message.service';
import { ProfileComponent } from './components/profile/profile.component';

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'chatHub';
  c.qs = { 
    user:'donald'
  };
  c.url = 'http://localhost:58986';
  c.logging = true;
  
  c.executeEventsInZone = true;
  c.executeErrorsInZone = false;
  c.executeStatusChangeInZone = true;
  return c;
}


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomeComponent,
    TeamsComponent,
    InvestmentsComponent,
    ProjectsComponent,
    NavigationComponent,
    UserdetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule, 
    AppRoutingModule,
    ModalModule.forRoot(),
    StoreModule.forRoot(RootReducer),
    EffectsModule.forRoot(effects),
    SignalRModule.forRoot(createConfig),
    AngularFileUploaderModule
  ],
  providers: [CookieService, LoginService, UsersService, PostsService, TeamsService, ConnectionResolver, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
