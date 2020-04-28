import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/auth.service';
import { PrevjobsModel } from '../model/prevjobs/prevjobs';

@Injectable({
  providedIn: 'root'
})
export class PrevjobsService {

  private baseUrl = 'http://localhost:8080/angularfront';

  constructor(private http: HttpClient, private authenticationService:AuthenticationService) { }

  getPreviousJobs(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPreviousJobs(prevjobs: PrevjobsModel): Observable<Object> {
    console.log(prevjobs);
    return this.http.post("http://localhost:8080/angularfront/addNewFormateurPrevJobs", prevjobs);
  }

  updatePreviousJobs(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePreviousJobs(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPreviousJobsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
