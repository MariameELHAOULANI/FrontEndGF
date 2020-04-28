import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { NgForm}  from '@angular/forms';
import { PlanformationService } from './planformation.service';
import { PlanformationModel} from '../model/planformation/planformation';

@Component({
  selector: 'app-planformation',
  templateUrl: './planformation.component.html',
  styleUrls: ['./planformation.component.css']
})
export class PlanformationComponent implements OnInit {

  PlanformationVar: PlanformationModel = new PlanformationModel();
  submitted = false;

  constructor(
    private planformationService: PlanformationService,
    private route: ActivatedRoute,
    private router: Router) { 
      this. PlanformationVar = new PlanformationModel();
    }

  ngOnInit() {
  }

  newPlanFormation(): void{
    this.submitted = false;
    this.PlanformationVar  = new PlanformationModel();
  }

  addPlanFormation(f: NgForm) {
    console.log("Angular addPlanFormation btn was clicked");                                             
    this.planformationService.createPlanFormation(this.PlanformationVar)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit(f: NgForm){
    this.addPlanFormation(f);
    this.submitted=true;
    
  }


}
