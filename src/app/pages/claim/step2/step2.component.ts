import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from 'src/app/shared/claim.service';
import { ClaimDataModel } from 'src/app/shared/claim-data.model';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  claimData: ClaimDataModel;

  constructor(private router: Router, private claimService: ClaimService) { }

  ngOnInit(): void {
    this.claimData = this.claimService.claimData;
    this.claimService.claimSubmitComplete.subscribe(result => {
      this.router.navigate(['claim', 'step-finish'])
    })
  }

  onBack() {
    this.router.navigate([''])
  }

  onSubmitClaim() {
    this.claimService.createClaim();
  }

}
