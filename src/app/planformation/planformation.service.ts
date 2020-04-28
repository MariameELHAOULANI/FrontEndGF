import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/auth.service';
import { PlanformationModel } from '../model/planformation/planformation';

@Injectable({
  providedIn: 'root'
})
export class PlanformationService {

  private baseUrl = 'http://localhost:8080/angularfront';

  constructor(private http: HttpClient, private authenticationService:AuthenticationService) { }

  getPlanFormation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPlanFormation(planformation: PlanformationModel): Observable<Object> {
    console.log(planformation);
    return this.http.post("http://localhost:8080/angularfront/addNewPlanFormation", planformation);
  }

  updatePlanFormation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePlanFormation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPlanFormationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
