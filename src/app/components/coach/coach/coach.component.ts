import { Component, OnInit,ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CoachAddEditComponent } from '../coach-add-edit/coach-add-edit.component';
import { CoachesService } from '../../../core/services/coaches.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrl: './coach.component.scss'
})
export class CoachComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','age','gender','worktype','experience','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _Dialog:MatDialog,private _cService: CoachesService){}
  openAddEditCForm(){
   const DialogRef= this._Dialog.open(CoachAddEditComponent);
   DialogRef.afterClosed().subscribe({
    next: (val)=>{

      if(val){
        this.getCoachList();
      }
    }
   });
    


    
  }
ngOnInit(): void {
  this.getCoachList();
}

  getCoachList(){
    this._cService.getCoachList().subscribe({
      next: (res)=>{
     this.dataSource=new MatTableDataSource(res);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator=this.paginator;
    
      },
      error: (err)=>
      {
        console.log(err);
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deletCoach(id: number){
    this._cService.deletCoach(id).subscribe({
      next:(res) =>{
        alert('Coach deleted')
        this.getCoachList();
      },
      error: console.log,
    })
  }
  
  openEditCForm(data: any){
    const DialogRef= this._Dialog.open(CoachAddEditComponent,{
      data,
    });
    
     
 
 
    DialogRef.afterClosed().subscribe({
      next: (val)=>{
  
        if(val){
          this.getCoachList();
        }
      }
     });
     
   }

  

}
