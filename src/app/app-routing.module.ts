import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { Step1Component } from './pages/claim/step1/step1.component';
import { Step2Component } from './pages/claim/step2/step2.component';
import { StepFinishComponent } from './pages/claim/step-finish/step-finish.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'claim',
    component: ClaimComponent,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component },
      { path: 'step-finish', component: StepFinishComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
