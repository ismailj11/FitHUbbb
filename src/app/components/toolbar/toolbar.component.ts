import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { publicDecrypt } from 'crypto';
import { HostListener, ViewChild } from '@angular/core';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent   {

   bdata: boolean=false;

  public btnClick():void{
      
    this.bdata=!this.bdata;

      

  }

     notificationst: boolean =false;
     public notificationsclicked(): void{
      

        this.notificationst =!this.notificationst;
      


     }

     constructor(private authservice: AuthService){


     }
     logout(){
     
       this.authservice.logout();
     }


     color: string='#127bc';

     


 }