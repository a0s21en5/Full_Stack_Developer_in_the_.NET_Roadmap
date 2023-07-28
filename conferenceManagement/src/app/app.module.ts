import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/Userdashboad/header/header.component';
import { FooterComponent } from './Components/Userdashboad/footer/footer.component';
import { MainUserDashboardComponent } from './Components/Userdashboad/main-user-dashboard/main-user-dashboard.component';
import { ContactComponent } from './Components/Userdashboad/contact/contact.component';
import { RoomsboxComponent } from './Components/Userdashboad/roomsbox/roomsbox.component';
import { EditprofileComponent } from './Components/Userdashboad/editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainUserDashboardComponent,
    ContactComponent,
    RoomsboxComponent,
    EditprofileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      },
      {
        path: 'main-user-dashboard',
        component: MainUserDashboardComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'roomsbox/:id',
        component: RoomsboxComponent
      },
      {
        path: 'editprofile',
        component: EditprofileComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }