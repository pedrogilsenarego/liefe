export interface TaxDetailsPT {
  iva: {
    active: boolean;
    percentage: number;
  };
  irs: {
    active: boolean;
    percentage: number;
  };
}

export interface BusinessSettings {
  taxControl: {
    active: boolean;
    taxCountry: string;
    taxDetails: TaxDetailsPT;
  };
}

export interface BusinessData {
  docId: string;
  businessName: string;
  userId: string;
  settings: BusinessSettings;
}
