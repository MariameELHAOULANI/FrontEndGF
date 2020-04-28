import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { NgForm}  from '@angular/forms';
import {PrevjobsModel}  from '../model/prevjobs/prevjobs';
import {PrevjobsService} from './prevjobs.service';

@Component({
  selector: 'app-prevjobs',
  templateUrl: './prevjobs.component.html',
  styleUrls: ['./prevjobs.component.css']
})
export class PrevjobsComponent implements OnInit {

  PrevJobsVar: PrevjobsModel = new PrevjobsModel();
  submitted = false;

  constructor(
    private PrevjobsService: PrevjobsService,
    private route: ActivatedRoute,
    private router: Router) { 
      this. PrevJobsVar = new PrevjobsModel();
    }

    addPreviousJobs(f: NgForm) {
      console.log("Angular addPreviousJobs btn was clicked");                                             
      this.PrevjobsService.createPreviousJobs(this.PrevJobsVar)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  ngOnInit() {
  }

  newFormation(): void{
    this.submitted = false;
    this.PrevJobsVar = new PrevjobsModel();
  }

  onSubmit(f: NgForm){
    this.addPreviousJobs(f);
    this.submitted=true;
    
  }

}
