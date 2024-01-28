import { Component, Input, OnInit, Output} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
 
})
export class SidenavComponent {
  
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  @Input() isopened: boolean = false ;
  @Input() dashboardbtn: boolean = false ;

  
 


}
