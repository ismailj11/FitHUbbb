import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {

  constructor(private _http: HttpClient) {

   }
   addCoach(data: any): Observable<any>
   {
    return this._http.post('http://localhost:3000/coaches', data)
   }
   updateCoach(id: number,data: any): Observable<any>
   {
    return this._http.put(`http://localhost:3000/coaches/${id}`, data)
   }
   getCoachList():Observable<any>{
    return this._http.get('http://localhost:3000/coaches');
   }

   deletCoach(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/coaches/${id}`);
   }
}
