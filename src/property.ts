import { Address, PropertyValue } from "./dashboard";

export interface Property {
  propertyComps: Record<string, PropertyComp>;
  tempPhotos: string[];
  propertyDetails: PropertyDetails;
  schoolDetails: SchoolDetails;
  propertyReportId: number;
  "address-slug": string;
  status: string;
  propertyValue: PropertyValue;
  taxAssessment: TaxAssessment;
  createdAt: number;
  live: boolean;
  listingInfo: ListingInfo;
  updatedAt: number;
  hoa: HOA[];
  id: string;
  marketDetails: MarketDetails[];
}

export interface ListingInfo {
  address: Address;
  propertyType: string;
  beds: number;
  fullBathrooms: number;
  threeQuarterBathrooms?: number;
  halfBathrooms?: number;
  quarterBathrooms?: number;
  squareFootage: string;
  lotSize: string;
  yearBuilt: string;
  listingPrice: number;
  schools: {
    elementary: string;
    middle: string;
    high: string;
  };
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  propertyPhotos: string[];
  shortDescription: string;
  listingDescription: string;
}

export interface PropertyComp {
  listingInfo: ListingInfo;
  summary: string;
  propertyPhotos: string[];
  address: CompsAddress;
  similarity: Similarity;
  propertyDetails: CompPropertyDetails;
  taxes: Taxes;
  propertyValue: CompPropertyValue;
  hoa: HOA[];
  addressId: number;
}

export interface ListingInfo {
  currentListDate: string;
  lastCloseDate: string;
  currentStatus: string;
  lastClosePrice: number | null;
  currentListingPrice: number;
  currentStatusDate: string;
}

export interface CompsAddress {
  address: string;
  msaId: string;
  city: string;
  latitude: number;
  county: string;
  fips: string;
  verifiedYN: boolean;
  tractId: string;
  blockId: string;
  zipcode: string;
  subdivision: string | null;
  blockGroupId: string;
  unit: string;
  completeYN: boolean;
  realYN: boolean;
  metroDivisionId: string;
  addressSlug: string;
  geoPrecision: string;
  state: string;
  neighborhood: string | null;
  longitude: number;
  zipcodePlus4: string;
}

export interface Similarity {
  scoreAdjusted: number;
  score: number;
  levelAdjusted: string;
  level: string;
}

export interface CompPropertyDetails {
  bedrooms: number;
  livingArea: number;
  parking: CompParking;
  basement: { has: boolean };
  constructionType: string[];
  lotSize: number;
  propertyType: string;
  storiesNumber: number;
  pool: boolean | null;
  bathrooms: CompBathrooms;
  yearBuilt: number;
}

export interface CompParking {
  garage: number | null;
  description: string;
  total: number;
  parkingDetails: ParkingDetail[];
}

export interface ParkingDetail {
  type: string;
  count: number;
}

export interface CompBathrooms {
  totalProjected: number;
  partial: number | null;
  full: number;
}

export interface Taxes {
  amountAnnual: number | null;
  year: number;
  legalDescription: string | null;
}

export interface CompPropertyValue {
  high: number;
  value: number;
  low: number;
  fsd: number;
}

export interface HOA {
  name: string | null;
  includes: string | null;
  fee: number | null;
  frequency: string | null;
}

export interface PropertyDetails {
  basement: Basement;
  parking: Parking;
  livingAreaBelowGrade: number | null;
  solarPanels: boolean;
  architecturalStyle: string | null;
  fireplace: boolean;
  yearBuilt: number;
  legalDescription: string;
  livingArea: number;
  subdivision: boolean;
  roofMaterial: string;
  sewer: boolean;
  zoning: Zoning;
  constructionTypes: string[];
  propertyType: string;
  propertyTypeDescription: string;
  poolCommunity: boolean;
  heating: string[];
  sewerPublic: boolean;
  buildingConditionCode: string | null;
  buildingQuality: string | null;
  unitsTotal: number | null;
  stories: number;
  fireplacesTotal: number;
  wallsExteriorMaterial: string;
  lotSize: number;
  roofType: string;
  pool: boolean;
  bathrooms: Bathrooms;
  water: string | null;
  parcelId: string;
  bedrooms: number;
  livingAreaAboveGrade: number | null;
  conditionClass: string | null;
  attic: string | null;
  buildings: string | null;
  roomsTotal: number | null;
  cooling: string[];
  neighborhood: string | null;
}

export interface Basement {
  finishedPct: number | null;
  has: boolean;
  totalArea: number | null;
}

export interface Parking {
  garage: number | null;
  description: string;
  total: number;
}

export interface Zoning {
  description: string | null;
  code: string | null;
}

export interface Bathrooms {
  totalProvided: string | null;
  totalProjected: number | null;
  total: number | null;
  partial: number | null;
  full: number | null;
}

export interface SchoolDetails {
  elementary: School[];
  high: School[];
  middle: School[];
}

export interface School {
  zipcode: string;
  score: number;
  verifiedBoundaries: boolean;
  address: string;
  distance: number;
  city: string;
  phone: string;
  educationLevel: string[];
  name: string;
  state: string;
  assessmentYear: number;
}

export interface ValueRange {
  high: number;
  value: number;
  low: number;
  fsd: number | null;
}

export interface TaxAssessment {
  valueAssessedImprovement: number;
  taxYear: number;
  valueAssessedLand: number;
  amountAnnual: number;
  valueAssessed: number;
  yearAssessed: number;
  apn: string;
}

export interface MarketDetails {
  historical: MarketHistorical;
  multiFamily: MarketMultiFamily;
  singleFamily: MarketSingleFamily;
}

export interface MarketHistorical {
  returns_1: number;
  returns_20_years: number;
  cagr_1_year: number;
  returns_10_years: number;
  cagr_20_years: number;
  returns_5_years: number;
  cagr_5_years: number;
  cagr_10_years: number;
}

export interface MarketMultiFamily {
  inventory_total: number;
  price_median: number;
  months_of_inventory_median: number;
  estimated_sales_total: number;
  days_on_market_median: number;
}

export interface MarketSingleFamily {
  inventory_total: number;
  price_median: number;
  months_of_inventory_median: number;
  estimated_sales_total: number;
  days_on_market_median: number;
}

export interface MarketConditions {
  market_trend: number;
  inventory_level: "very_low" | "low" | "balanced" | "high" | "very_high";
  days_on_market: number;
  list_to_sold_ratio: number;
  volatility?: "normal" | "high";
}
