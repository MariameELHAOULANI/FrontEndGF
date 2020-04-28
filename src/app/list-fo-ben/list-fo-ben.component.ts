import { Component, OnInit } from '@angular/core';
import { FormationService } from "../formation/formation.service";
import { Router } from '@angular/router';
import { FormationModel } from "../model/formation/formation";
import { Observable } from "rxjs";

@Component({
  selector: 'app-list-fo-ben',
  templateUrl: './list-fo-ben.component.html',
  styleUrls: ['./list-fo-ben.component.css']
})
export class ListFoBenComponent implements OnInit {

listFormationVar: Observable<FormationModel[]>;

constructor(private formationService: FormationService,
  private router: Router) { }

ngOnInit() {
  this.reloadData();
}

reloadData() {
  this.listFormationVar = this.formationService.getFormationList();
}
}
