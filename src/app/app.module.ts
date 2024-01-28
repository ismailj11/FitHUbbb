import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import {MatSelectModule} from '@angular/material/select';

import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatBadgeModule} from '@angular/material/badge';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AboutComponent } from './components/about/about.component';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { PersonFormDialogComponent } from './components/person-crud/person-form-dialog/person-form-dialog.component';
import { PersonComponent } from './components/person-crud/person/person.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { SubscriptionComponent } from './components/subscription/subscription.component';

import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SnackshopComponent } from './components/snackshop/snackshop.component';
import { TranslateModule} from '@ngx-translate/core';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslationComponent } from './components/translation/translation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    SidenavComponent,
    ProgramsComponent,
    ScheduleComponent,
    AboutComponent,
    PersonFormDialogComponent,
    PersonComponent,
    ConfirmationDialogComponent,
    SubscriptionComponent,
    SnackshopComponent,
    TranslationComponent,
    
 
    

  
 
    
  ],
  imports: [
    
    
    
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]         
      }
    })
    ,MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    BrowserModule,
    MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    ColorPickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,

    MatProgressSpinnerModule,
  MatTableModule,
  MatCardModule
 ,MatRadioModule

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}