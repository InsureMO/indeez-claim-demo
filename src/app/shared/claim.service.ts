import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ClaimDataModel } from './claim-data.model'
import { ClaimNoticeRequest, ClaimObject, ClaimParty } from './claim-request.model'
import { IPQuoteRequest } from './income-protection-quote-request.model'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  claimData = new ClaimDataModel();
  claimDataUpdated = new Subject<ClaimDataModel>();
  claimSubmitComplete = new Subject<any>()
  claimSubmitData: any = null;

  constructor(private http: HttpClient) { }

  getDefaultHeaders() {
    return {
      headers: {
        'Authorization': `Bearer ${environment.insuremo.apiToken}`
      }
    }
  }

  public toDate(dateStr: string): Date {
    const dateParts = dateStr.split('-')
    return new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
  }

  public formatDate(date: Date): string {
    if (date) {
      return `${date}T00:00:00`
    }
    return '';
  }

  policyLookup() {
    const loadURL = new URL(`${environment.insuremo.envBaseURL}/${environment.insuremo.tentantId}/v1/proposal/v1/load`);
    loadURL.searchParams.set('policyNo', this.claimData.policyNo)
    return this.http.get<IPQuoteRequest>(loadURL.toString(), this.getDefaultHeaders()).subscribe(result => {
      this.claimData.policyEffectiveDate = this.toDate(result.EffectiveDate)
      this.claimData.policyExpiryDate = this.toDate(result.ExpiryDate)
      this.claimData.claimPolicyHolder = result.PolicyCustomerList[0].CustomerName;
      this.claimData.claimPolicyNo = result.PolicyNo
      this.claimData.claimProductName = 'Income Protection'

      this.claimData.accidentPostCode = result.PSTCD;
      this.claimData.contactEmail = result.EMAD;

      this.claimDataUpdated.next(this.claimData)
    })
  }

  createClaim() {
    const requestData = new ClaimNoticeRequest();

    requestData.PolicyNo = this.claimData.policyNo;
    requestData.PolicyHolderName = this.claimData.claimPolicyHolder;
    requestData.ContactType = this.claimData.claimContactType;
    requestData.ContactName = this.claimData.contactPerson
    requestData.ContactPhone = this.claimData.contactTelephone
    requestData.LossCause = this.claimData.lossCause
    requestData.LastWorkingDay = this.formatDate(this.claimData.lastWorkingDay)
    requestData.NatureOfIllness = this.claimData.natureOfIllness;
    requestData.DoctorsName = this.claimData.doctorsName;
    requestData.Details = this.claimData.otherDetails;

    requestData.AccidentAddress = this.claimData.accidentStreet;
    requestData.AccidentCityCode = this.claimData.accidentCity;
    requestData.AccidentCountryCode = this.claimData.accidentCountry;

    const claimObject = new ClaimObject()
    requestData.ClaimObjectList = [claimObject];
    const claimParty = new ClaimParty();
    requestData.ClaimPartyList = [claimParty];
    claimParty.Email = this.claimData.contactEmail;
    claimParty.Mobile = this.claimData.contactTelephone;

    this.http.post<any>('api/claim/submit', requestData, this.getDefaultHeaders())
      .subscribe(result => {
        this.claimSubmitData = result;
        this.claimData.caseId = result.CaseId;
        this.claimData.fnolNumber = result.FnolNo;
        this.claimSubmitComplete.next(this.claimSubmitData)
      })
  }
}