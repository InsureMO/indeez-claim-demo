import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../../../shared/claim.service'
import { ClaimDataModel } from 'src/app/shared/claim-data.model';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  claimData: ClaimDataModel

  constructor(private router: Router, private claimService: ClaimService) { }

  ngOnInit(): void {
    this.claimData = this.claimService.claimData;
    this.claimService.claimDataUpdated.subscribe(claimData => this.claimData = claimData)
  }

  onPolicyLookup() {
    this.claimService.policyLookup();
  }

  onBack() {
    this.router.navigate([''])
  }
  onNext() {
    this.router.navigate(['claim', 'step2'])
  }
}
