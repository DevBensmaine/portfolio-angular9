import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProfil } from '../../Profil'
import {  tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private dataServiceUrl = 'api/dataService/data.json';

  constructor(private http: HttpClient) {}


  getAllInformation() : Observable<IProfil[]>{
    return this.http.get<IProfil[]>(this.dataServiceUrl)
      .pipe(
       tap(data => data)
      );
  }
}
