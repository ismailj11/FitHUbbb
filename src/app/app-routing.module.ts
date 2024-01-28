import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { ProgramsComponent } from './components/programs/programs.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AboutComponent } from './components/about/about.component';
import { PersonComponent } from './components/person-crud/person/person.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SnackshopComponent } from './components/snackshop/snackshop.component';
import { TranslationComponent } from './components/translation/translation.component';

const routes: Routes = [
  
 
  {
    path: '',
     redirectTo: 'login',
     pathMatch: 'full'
  },


{
  path: 'dashboard', 
  component:DashboardComponent,
  canActivate: [authGuard], 
  
  
},
{
path: 'login',
component: LoginComponent,

}
,
{path: 'logout',
redirectTo: '', pathMatch: 'full'
}
,
{
path: 'programs',
component: ProgramsComponent

},
{
path: 'schedule',
component: ScheduleComponent

},
{
  path: 'about',
  component: AboutComponent
  
  }
  ,
  {
    path:'coaches',
    component: PersonComponent,
    canActivate:[authGuard]
  },

  {
  path:'subscription',
  component: SubscriptionComponent,
  canActivate:[authGuard]
}
,
  
  {
  path:'snackshop',
  component: SnackshopComponent,
  canActivate:[authGuard]
}

,{
  path:'translation',
  component:TranslationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
