
export class ClaimDataModel {
  policyNo: string = "POMPIP00000001";
  userOffice: string;
  quoteDate: Date;
  policyEffectiveDate: Date;
  policyExpiryDate: Date;

  claimPolicyNo: string;
  claimProductName: string;
  claimPolicyHolder: string;
  claimContactType: string;
  contactPerson: string;
  contactTelephone: string;
  contactEmail: string;

  lossCause: string;
  lastWorkingDay: Date;
  natureOfIllness: string;
  doctorsName: string;
  otherDetails: string;
  lossDate: Date;
  notificationDate: Date;

  accidentStreet: string;
  accidentCity: string;
  accidentState: string;
  accidentPostCode: string;
  accidentCountry: string;

  fnolNumber: string;
  caseId: number;

}