import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';

import { ProgramsComponent } from './components/programs/programs.component';
import { CoachComponent } from './components/coach/coach/coach.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
   
  },
  {
    path: 'dashboard',
    component: ToolbarComponent,
    canActivate: [authGuard],
    children: [
      { path: 'programs', component: ProgramsComponent, canActivate: [authGuard] 
        
    },
    {path:'dashboard',component: DashboardComponent,canActivate: [authGuard]}
    ,{path:'coaches',component: CoachComponent,canActivate: [authGuard]}
    ,{path:'about',component: AboutComponent,canActivate: [authGuard]}
    ]
  }
  
  ,
  
    
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }