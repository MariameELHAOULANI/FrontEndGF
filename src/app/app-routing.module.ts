import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { FormateurComponent } from './formateur/formateur.component';
import { LoginGuard } from './login/auth.guard';
import { FormationComponent } from './formation/formation.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PlanformationComponent } from './planformation/planformation.component';
import { PrevjobsComponent } from './prevjobs/prevjobs.component';
import { ListFormationsComponent } from './list-formations/list-formations.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { HomeComponent} from './home/home.component';
import { BenificiareComponent } from './benificiare/benificiare.component';
import {ListFoBenComponent} from'./list-fo-ben/list-fo-ben.component';
import {LogoutComponent} from'./logout/logout.component';




const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent, canActivate: [LoginGuard] },
  {path: 'formateur', component: FormateurComponent, canActivate: [LoginGuard] },
  {path: 'benificiare', component: BenificiareComponent, canActivate: [LoginGuard] },
  {path: 'formation', component: FormationComponent, canActivate: [LoginGuard] },
  {path: 'new-user', component: NewUserComponent },
  {path: 'planformation' , component: PlanformationComponent, canActivate: [LoginGuard] },
  {path: 'prevjobs' , component: PrevjobsComponent},
  {path: 'listformations' , component: ListFormationsComponent, canActivate: [LoginGuard] },
  {path: 'updateformation/:id' , component: UpdateFormationComponent, canActivate: [LoginGuard] },
  {path: 'listfoben' , component: ListFoBenComponent, canActivate: [LoginGuard] },
  {path: 'logout',component:LogoutComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }

