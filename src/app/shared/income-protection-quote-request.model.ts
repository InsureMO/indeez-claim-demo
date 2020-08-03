export class IPQuoteRequest {
  constructor() {
    this.PolicyLobList = [new PolicyLob()];
    this.PolicyLobList[0].PolicyRiskList = [new PolicyRisk()];
  }
  ProductCode = "MPIP";
  ProposalDate = "2020-07-30";
  EffectiveDate = "2020-07-30";
  ExpiryDate = "2021-05-29";
  ProductVersion = "1.0";
  PremiumCurrencyCode = "INR";
  BookCurrencyCode = "INR";
  BeforeVatPremium?: number;
  PolicyNo?: string;
  PremiumBookExchangeRate = 1;
  // First Name
  FSNM = "Sarah";
  // Last Name
  LSNM = "John";
  // Sex
  SEX = "SEXLST2";
  // Date of Birth
  DOB = "1985-05-29";
  // Do you Smoke?
  SMKE = "SMKELST1";
  // What is your Height?
  HEGT = "5.8";
  // What is your Weight?
  WEHT = "65";
  // Email Address
  EMAD = "sarah@gmail.com";
  // Phone Number
  PHNO = "2279460234";
  // What is your postcode
  PSTCD = "C2N 5DU";
  // Are you a permanent resident of the UK?
  UKRES = "YES";
  PolicyCustomerList: PolicyCustomer[] = [];
  PolicyLobList: PolicyLob[]
}

export class PolicyCustomer {
  CustomerName: string;
  IsInsured?: string;
  IsOrgParty?: string;
  IsPolicyHolder?: string;
}

export class PolicyLob {
  PolicyRiskList: PolicyRisk[] = []
  ProductCode: string = "MPIP"
  BeforeVatPremium?: number;
}

export class PolicyRisk {
  ProductElementCode = "PER"
  BeforeVatPremium?: number;
  // What do you want to protect?
  PROT = "PROTLST1"
  // What is your gross annual income?
  GSANICME = "100000"
  // What is your employment status?
  OCCPST = "OCCPSTLST1"
  // How many hours a week do you work?
  WRKHRS = "WRKHRSLST1"
  // What do you do for a living?
  LVG = "Housewife"
  // What industry do you work within?
  IDSTR = "IDSTRLST3"
  // Who do you work for?
  WRKF = "Houseperson"
  // How long have you been in continuous employment for?
  CONTEMP = "CONTEMPLST1"
  // What is your residential status?
  RESDST = "RESDSTLST1"
  // Have you had your mortgage for more than 2 years?
  MRTGYR = "MRTGYRLST2"
  // Cancer, tumour, Hodgkin's disease, leukaemia or lymphoma?
  CNCRDSE = "NO"
  // Heart abnormality, including heart-related chest pain, heart attack or heart valve disease?
  HERTDSE = "NO"
  // Stroke, brain haemorrhage or brain injury?
  BRNSTK = "NO"
  // Mental illness that has required hospital admission?
  MENIL = "NO"
  // Been prescribed any medication, treatment or counselling that lasted for two weeks or more?
  MEDPRSCB = "NO"
  // Are you currently waiting for the results of any tests / investigations or experiencing symptoms that you are likely to seek medical advice or treatment for?
  TSTRST = "NO"
  // In the last month have you tested positive for the Coronavirus?
  COVID = "NO"
  // Please give details of exposure / infection and current status.
  COVIDTS = "NA"
  PolicyCoverageList = [new PICoverage()]
}

export class PICoverage {
  ProductElementCode = "INCPRO";
  BeforeVatPremium?: number;
}