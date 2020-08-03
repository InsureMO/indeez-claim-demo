
export class ClaimNoticeRequest {
  "@type" = "ClaimCase-ClaimCase"
  ClaimNo: string;
  PolicyNo = "POTBTI00000624"
  CaseStatus = "1"
  RecordType = "2"
  AccidentTime = "2020-07-29T00:00:00"
  NoticeTime = "2020-07-29T00:00:00"
  PolicyHolderName: string;
  ContactName: string;
  ContactPhone: string;
  ContactType: string;
  ClaimType = ""
  ProductCode = "TBTI"
  FnolNo = "{{fnolNo}}"
  LastWorkingDay: string;
  NatureOfIllness: string;
  DoctorsName: string;
  Details: string;
  LossCause: string;
  AccidentAddress: string;
  AccidentCountryCode: string;
  AccidentCityCode: string;


  ClaimObjectList: ClaimObject[] = []
  ClaimPartyList: ClaimParty[] = []
}

export class ClaimObject {
  "@type" = "ClaimObject-ClaimObject"
  DamageDesc = ""
  ClaimItemList = []
  ClaimSettlementList: ClaimSettlement[] = []
}

export class ClaimSettlement {
  "@type" = "ClaimSettlement-ClaimSettlement"
}

export class ClaimParty {
  "@type" = "ClaimParty-ClaimParty"
  IdType = ""
  IdNo = ""
  Mobile = ""
  PostCode = ""
  Address = ""
  Email = ""
}