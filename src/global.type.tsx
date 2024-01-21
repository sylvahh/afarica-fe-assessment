export type RISK_PORTFOLIO = {
  Alternative: string;
  Commodities: string;
  'Emerging Stocks': string;
  'Foreign Bonds': string;
  'Foreign Stocks': string;
  'Nigerian Bonds': string;
  'Nigerian Stocks': string;
  'Real Estate': string;
  'T-Bills': string;
  'Tech Stocks': string;
};



export interface TRANSFOMRED_DATA {
  [riskScore: number]: {
    Alternative: string;
    Commodities: string;
    'Emerging Stocks': string;
    'Foreign Bonds': string;
    'Foreign Stocks': string;
    'Nigerian Bonds': string;
    'Nigerian Stocks': string;
    'Real Estate': string;
    'T-Bills': string;
    'Tech Stocks': string;
  };
}



export type STOCKS = {
  'Alternative': string
  "Commodities": string
  'Emerging Stocks': string
  'Foreign Bonds': string
  'Foreign Stocks': string
  'Nigerian Bonds': string
  'Nigerian Stocks': string
  'Real Estate': string
  'Risk Score': number;
  'T-Bills': string
  'Tech Stocks': string
};

