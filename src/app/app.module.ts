import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { Step1Component } from './pages/claim/step1/step1.component';
import { Step2Component } from './pages/claim/step2/step2.component';
import { StepFinishComponent } from './pages/claim/step-finish/step-finish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimComponent,
    Step1Component,
    Step2Component,
    StepFinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
