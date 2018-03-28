import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment} from '../environments/environment';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { HttpClientModule} from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClientService } from './services/client.service';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { CalenderComponent } from './components/calender/calender.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    ClientFormComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Client'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
