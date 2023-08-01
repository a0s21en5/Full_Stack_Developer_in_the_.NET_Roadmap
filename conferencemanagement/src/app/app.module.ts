import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { GetallbookingComponent } from './components/Admin/getallbooking/getallbooking.component';
import { GetallpendingrequestComponent } from './components/Admin/getallpendingrequest/getallpendingrequest.component';
import { GetbookroombyidComponent } from './components/User/getbookroombyid/getbookroombyid.component';
import { FormsModule } from '@angular/forms';
import { CreateroomComponent } from './components/Admin/createroom/createroom.component';
import { DisplayallroomtoadminComponent } from './components/Admin/displayallroomtoadmin/displayallroomtoadmin.component';
import { UpdateroomComponent } from './components/Admin/updateroom/updateroom.component';
import { GetalluserComponent } from './components/Admin/getalluser/getalluser.component';
import { UpdateuserbyadminComponent } from './components/Admin/updateuserbyadmin/updateuserbyadmin.component';
import { ContactComponent } from './components/User/contact/contact.component';
import { FooterComponent } from './components/User/footer/footer.component';
import { HeaderComponent } from './components/User/header/header.component';
import { EditprofileComponent } from './components/User/editprofile/editprofile.component';
import { RoomsboxComponent } from './components/User/roomsbox/roomsbox.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AboutComponent } from './components/User/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    GetallbookingComponent,
    GetallpendingrequestComponent,
    GetbookroombyidComponent,
    CreateroomComponent,
    DisplayallroomtoadminComponent,
    UpdateroomComponent,
    GetalluserComponent,
    UpdateuserbyadminComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    EditprofileComponent,
    RoomsboxComponent,
    LogoutComponent,
    AboutComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
