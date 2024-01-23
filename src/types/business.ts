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

export interface BusinessData {
  businessName: string;
  userId: string;
  taxControl: {
    active: boolean;
    taxCountry: string;
    taxDetails: any;
  };
}
