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
    listingInfo: ListingInfo | null;
    updatedAt: number;
    hoa: HOA[];
    id: string;
    marketDetails: MarketDetails[];
    marketGrade: MarketGrade;
    marketPulse: MarketPulse;
}
export interface MarketGrade {
    grade: "A" | "B" | "C" | "D" | "F";
}
export interface MarketPulse {
    daysOnMarketMedian: number;
    daysOnMarketMedianMovingAvg: number;
    daysOnMarketNotContractMedian: number;
    daysOnMarketNotContractMedianMovingAvg: number;
    daysToCloseMedian: number;
    daysToCloseMedianMovingAvg: number;
    daysToContractMedian: number;
    daysToContractMedianMovingAvg: number;
    DaysToFirstPriceDropMedian: number;
    daysToFirstPriceDropMedianMovingAvg: number;
    eventDate: string;
    listingsClosedCount: number;
    listingsClosedCountMovingAvg: number;
    listingsNewCount: number;
    listingsNewCountMovingAvg: number;
    listingsOnMarketCount: number;
    listingsOnMarketCountMovingAvg: number;
    ListingsPriceChangeCount: number;
    listingsPriceChangeCountMovingAvg: number;
    listingsPriceDropCount: number;
    listingsPriceDropCountMovingAvg: number;
    listingsPriceDropPercent: number;
    listingsPriceDropPercentMovingAvg: number;
    listingsRemovedCount: number;
    listingsRemovedCountMovingAvg: number;
    listingsRemovedPercent: number;
    listingsRemovedPercentMovingAvg: number;
    listingsUnderContractCount: number;
    listingsUnderContractCountMovingAvg: number;
    listingsUnderContractPercent: number;
    listingsUnderContractPercentMovingAvg: number;
    monthsOfSupplyMedian: number;
    monthsOfSupplyMedianMovingAvg: number;
    priceChangePercentMedian: number;
    priceChangePercentMedianMovingAvg: number;
    priceClosedMedian: number;
    priceClosedMedianMovingAvg: number;
    priceNewListMedian: number;
    priceNewListMedianMovingAvg: number;
    priceOnMarketMedian: number;
    priceOnMarketMedianMovingAvg: number;
    pricePerSqftClosedMedian: number;
    pricePerSqftClosedMedianMovingAvg: number;
    pricePerSqftNewListMedian: number;
    pricePerSqftNewListMedianMovingAvg: number;
    pricePerSqftOnMarketMedian: number;
    pricePerSqftOnMarketMedianMovingAvg: number;
    saleToListPriceMedian: number;
    saleToListPriceMedianMovingAvg: number;
    saleToListPriceOriginalMedian: number;
    saleToListPriceOriginalMedianMovingAvg: number;
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
    yearBuilt: number;
    listingPrice: number;
    schools: {
        elementary: string;
        middle: string;
        high: string;
        district: string;
    };
    contactInfo: {
        name: string;
        email: string;
        phone: string;
    };
    propertyPhotos: string[];
    shortDescription: string;
    listingDescription: string;
    isIncorporatedArea?: string;
    zoning?: string;
    subdivisionName?: string;
    houseDirection?: string[];
    viewType?: string[];
    isSeniorCommunity?: string;
    hasRestrictions?: string;
    restrictionTypes?: string[];
    petsAllowed?: string[];
    rentalsAllowed?: string[];
    lotSizeArea?: string;
    lotSizeAcres?: number;
    lotNumber?: string;
    lotFeatures?: string[];
    fencing?: string[];
    skiFeatures?: string[];
    waterfrontFeatures?: string[];
    currentUse?: string[];
    vegetation?: string[];
    horsesAllowed?: string;
    horseAmenities?: string[];
    roadSurfaceType?: string[];
    roadFrontageAccessType?: string[];
    roadResponsibility?: string[];
    exclusions?: string;
    possessionTerms?: string[];
    linkToPhotos?: string;
    linkToVirtualTour?: string;
    documentsAvailable?: string[];
    hasHOA?: string;
    hoaName?: string;
    hoaType?: string;
    hoaFee?: string;
    hoaFeeFrequency?: string;
    hoaPhone?: string;
    associationURL?: string;
    hoaIncludes?: string[];
    hoaAmenities?: string[];
    hoaTransferFee?: string;
    hoaSpecialAssessment?: string;
    otherHOAs?: string;
    currentlyResiding?: string;
    currentAddress?: string;
    isOwner?: string;
    ownershipType?: string;
    completeOwnerName?: string;
    secondOwnerName?: string;
    authorizedSignerEmail?: string;
    authorizedSignerPhone?: string;
    taxLegalDescription?: string;
    parcelNumber?: string;
    taxAnnualAmount?: string;
    taxYear?: string;
    specialTaxingMetroDistrict?: string;
    metroDistrictWebsite?: string;
    listingTerms?: string[];
    specialListingConditions?: string[];
    approximateMortgagePayoff?: string;
    parkingFeatures?: string[];
    parkingType1?: string;
    parkingSpaces1?: number;
    parkingType2?: string;
    parkingSpaces2?: number;
    parkingType3?: string;
    parkingSpaces3?: number;
    parkingType4?: string;
    parkingSpaces4?: number;
    otherLivableStructures?: string;
    otherOutbuildings?: string;
    diningRoomLevel?: string;
    livingRoomLevel?: string;
    kitchenLevel?: string;
    laundryLevel?: string;
    primaryBedroomLevel?: string;
    bedroom1Level?: string;
    bedroom2Level?: string;
    bedroom3Level?: string;
    bedroom4Level?: string;
    bedroom5Level?: string;
    bedroom6Level?: string;
    primaryBathroomLevel?: string;
    bathroom1Level?: string;
    bathroom2Level?: string;
    bathroom3Level?: string;
    otherRoomsWithLevel?: string;
    twentyFourHourNoticeRequired?: string;
    petsOnPremises?: string;
    usingLockbox?: string;
    structureType?: string;
    propertySubtype?: string;
    isPropertyAttached?: string;
    commonWalls?: string[];
    unitFloorLevel?: number;
    propertyCondition?: string[];
    builderName?: string;
    builderModel?: string;
    timeOfCompletion?: string;
    roofType?: string[];
    constructionMaterials?: string[];
    foundationType?: string[];
    architecturalStyle?: string[];
    hasBasement?: string;
    basementFeatures?: string[];
    waterIncluded?: string;
    waterSource?: string[];
    sewerType?: string[];
    waterMineralRights?: string[];
    waterTapPaid?: string;
    issuedWellPermitNumber?: string;
    wellType?: string[];
    wellUsage?: string[];
    waterTapFee?: number;
    irrigationSource?: string[];
    utilities?: string[];
    electric?: string[];
    heatingTypeFuelSource?: string[];
    coolingType?: string[];
    appliancesIncluded?: string[];
    securityFeatures?: string[];
    newHomeCommunityInfo?: string;
    userUpdatedAt?: string;
    userPublishedAt?: string;
}
export interface PropertyComp {
    listingInfo: PropertyCompListingInfo;
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
export interface PropertyCompListingInfo {
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
    basement: {
        has: boolean;
    };
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
    basement: Basement | null;
    parking: Parking | null;
    livingAreaBelowGrade: number | null;
    solarPanels: boolean | null;
    architecturalStyle: string | null;
    fireplace: boolean | null;
    yearBuilt: number | null;
    legalDescription: string | null;
    livingArea: number | null;
    subdivision: boolean | null;
    roofMaterial: string | null;
    sewer: boolean | null;
    zoning: Zoning | null;
    constructionTypes: string[] | null;
    propertyType: string | null;
    propertyTypeDescription: string | null;
    poolCommunity: boolean | null;
    heating: string[] | null;
    sewerPublic: boolean | null;
    buildingConditionCode: string | null;
    buildingQuality: string | null;
    unitsTotal: number | null;
    stories: number | null;
    fireplacesTotal: number | null;
    wallsExteriorMaterial: string | null;
    lotSize: number | null;
    roofType: string | null;
    pool: boolean | null;
    bathrooms: Bathrooms | null;
    water: string | null;
    parcelId: string | null;
    bedrooms: number | null;
    livingAreaAboveGrade: number | null;
    conditionClass: string | null;
    attic: string | null;
    buildings: string | null;
    roomsTotal: number | null;
    cooling: string[] | null;
    neighborhood: string | null;
}
export interface Basement {
    finishedPct: number | null;
    has: boolean;
    totalArea: number | null;
}
export interface Parking {
    garage: number | null;
    description: string | null;
    total: number | null;
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
