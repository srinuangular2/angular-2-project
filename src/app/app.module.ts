import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { JobviewComponent } from './jobview/jobview.component';
import { MypipePipe } from './mypipe/mypipe.pipe';

const appRoutes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'jobs',component:JobsComponent },
  { path: 'register',component:RegistrationComponent },
  { path: 'jobview',component:JobviewComponent },
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: '**', component: ErrorComponent }
  
];

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    JobsComponent,
    RegistrationComponent,
    ErrorComponent,
    HomeComponent,
    JobviewComponent,
    MypipePipe,  
 
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    ReactiveFormsModule,   
    NgxPaginationModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
