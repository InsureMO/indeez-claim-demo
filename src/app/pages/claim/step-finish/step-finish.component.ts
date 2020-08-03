import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/shared/claim.service';
import { ClaimDataModel } from 'src/app/shared/claim-data.model';

@Component({
  selector: 'app-step-finish',
  templateUrl: './step-finish.component.html',
  styleUrls: ['./step-finish.component.scss']
})
export class StepFinishComponent implements OnInit {

  claimData: ClaimDataModel

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.claimData = this.claimService.claimData;
  }

}
