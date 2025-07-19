import { Address, PropertyValue } from "./dashboard";
export interface Property {
    propertyComps: Record<string, PropertyComp>;
    tempPhotos: string[];
    propertyDetails: PropertyDetails | null;
    schoolDetails: SchoolDetails | null;
    propertyReportId: number | string;
    "address-slug": string;
    status: "DRAFT" | "PUBLISHED";
    publishedAt: number | null;
    propertyValue: PropertyValue | null;
    taxAssessment: TaxAssessment | null;
    createdAt: number;
    live: boolean;
    listingInfo: ListingInfo | null;
    draftListingInfo: ListingInfo | null;
    mlsInfo: MlsInfo | null;
    mlsDetails: MlsDetails | null;
    mlsChangeRequest: MlsChangeRequest | null;
    updatedAt: number;
    hoa: HOA[];
    id: string;
    currentOwnerId: string | null;
    marketDetails: MarketDetails[];
    marketGrade: MarketGrade | null;
    marketPulse: MarketPulse | null;
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
export interface MlsDetails {
    mlsId: string;
    mlsName?: string;
    link?: string;
    listedBy?: string;
}
export interface MlsChangeRequest {
    submittedAt?: string;
    createdAt?: number;
    updatedAt?: number;
    listingPrice?: number;
    listingDescription?: string;
    uploadedPhotos?: string[] | ListingPhotos[];
    linkToPhotos?: string;
    linkToVirtualTour?: string;
    contactInfo?: {
        name?: string;
        email?: string;
        phone?: string;
    };
    openHouseDate?: string;
    openHouseTimeStart?: string;
    openHouseTimeEnd?: string;
    openHouseType?: string;
    other?: string;
}
export interface MlsInfo {
    submittedAt?: string;
    address: Address;
    createdAt?: number;
    updatedAt?: number;
    streetNumber: string;
    streetName: string;
    unitNumber?: string;
    city: string;
    state: string;
    zipcode: string;
    county: string;
    currentlyResiding: boolean;
    unresidingCurrentAddress?: string;
    isOwner: boolean;
    completeOwnerName: string;
    secondOwnerName?: string;
    authorizedSignerEmail: string;
    authorizedSecondarySignerEmail?: string;
    authorizedSignerPhone?: string;
    twentyFourHourNoticeRequired: boolean;
    petsOnPremises: boolean;
    usingLockbox: boolean;
    primaryEmail: string;
    primaryPhone: string;
    primaryContactName: string;
    listingActiveDate: string;
    propertyType: string;
    listingPrice: number;
    mlsListingDescription: string;
    directions?: string;
    propertySubtype: string;
    structureType: string;
    taxLegalDescription: string;
    ownershipSeller: string;
    listingTerms: string[];
    specialListingConditions: string[];
    parcelNumber: string;
    taxAnnualAmount: number;
    taxYear: number;
    specialTaxingMetroDistrict: boolean;
    metroDistrictWebsite?: string;
    subdivisionName: string;
    buildingComplexName?: string;
    zoning: string;
    isIncorporated: boolean;
    directionFaces?: string;
    view?: string[];
    schoolDistrict: string;
    schools: {
        elementary: string;
        middle: string;
        high: string;
    };
    yearBuilt: number;
    levels: string[];
    propertyCondition: string[];
    builderName?: string;
    builderModel?: string;
    dateOfCompletion?: string;
    constructionMaterials: string[];
    roof: string[];
    exteriorFeatures?: string[];
    patioFeatures?: string[];
    isPropertyAttached?: boolean;
    commonWalls?: string[];
    unitFloorLevel?: number;
    architecturalStyle?: string[];
    accessibilityFeatures?: string[];
    poolFeatures?: string[];
    entryLocation?: string;
    totalNumberofUnits?: number;
    lotSizeArea: number;
    lotSizeMeasurements: string;
    lotNumber?: string;
    lotFeatures?: string[];
    fencing?: string[];
    skiFeatures?: string[];
    waterfrontFeatures?: string[];
    currentUse?: string[];
    vegetation?: string[];
    horses?: boolean;
    horseAmenities?: string[];
    roadSurfaceType?: string[];
    roadFrontageType?: string[];
    roadResponsibility?: string[];
    waterIncluded: boolean;
    waterSource: string[];
    sewer: string[];
    waterMineralRights?: string[];
    wellType?: string[];
    wellUsage?: string[];
    issuedWellPermitNumber?: string;
    waterTapPaid?: boolean;
    waterTapFee?: number;
    irrigationSource?: string[];
    utilities?: string[];
    electric?: string[];
    parkingFeatures?: string[];
    parkingType1: string;
    parkingSpaces1: number;
    parkingType2?: string;
    parkingSpaces2?: number;
    parkingType3?: string;
    parkingSpaces3?: number;
    otherLivableStructures?: string;
    otherOutbuildings?: string;
    aboveGradeFinishedSqFt: number;
    livingAreaSqFt: number;
    buildingAreaTotalSqFt: number;
    areaSource: string;
    hasBasement: boolean;
    basementDetails?: string[];
    basementCeilingHeight?: string;
    foundationDetails?: string[];
    bedrooms: number;
    fullBathrooms: number;
    threeQuarterBathrooms?: number;
    halfBathrooms: number;
    quarterBathrooms?: number;
    primaryBedroomLevel: string;
    bedroom1Level: string;
    bedroom2Level?: string;
    bedroom3Level?: string;
    bedroom4Level?: string;
    bedroom5Level?: string;
    bedroom6Level?: string;
    primaryBathroomLevel: string;
    bathroom1Level: string;
    bathroom2Level?: string;
    bathroom3Level?: string;
    diningRoomLevel: string;
    livingRoomLevel: string;
    kitchenLevel: string;
    laundryLevel: string;
    heatingType: string[];
    coolingType: string[];
    appliances?: string[];
    securityFeatures?: string[];
    otherEquipment?: string[];
    laundryFeatures?: string[];
    interiorFeatures?: string[];
    flooring?: string[];
    windowFeatures?: string[];
    fireplacesTotal?: number;
    fireplaceFeatures?: string[];
    furnished?: string;
    isAssociation: boolean;
    associationName?: string;
    associationType?: string;
    associationFee?: number;
    associationFeeFrequency?: string;
    associationPhone?: string;
    associationURL?: string;
    multipleAssociations?: boolean;
    otherAssociationInfo?: string;
    associationFeeIncludes?: string[];
    associationCommunityAmenities?: string[];
    associationTransferAmount?: number;
    associationPrivateTransferFee?: number;
    associationStatusLetterFee?: number;
    specialAssessmentDescription?: string;
    seniorCommunity: boolean;
    hasRestrictions: boolean;
    restrictionsList?: string[];
    petsAllowed: string[];
    rentalsAllowed: string[];
    otherRestrictions?: string;
    uploadedPhotos: string[] | ListingPhotos[];
    addCaptions?: string;
    linkToPhotos?: string;
    linkToVirtualTour?: string;
    exclusions: string;
    possession: string[];
    documentsAvailable?: string[];
    mortgagePayoffAmount: number;
    openHouseDate: string;
    openHouseTimeStart: string;
    openHouseTimeEnd: string;
    openHouseType: string;
}
export interface ListingInfo {
    address: Address;
    createdAt?: number;
    updatedAt?: number;
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
    listingStatus: string;
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
    propertyPhotos: string[] | ListingPhotos[];
    shortDescription: string;
    listingDescription: string;
}
export interface ListingPhotos {
    main: string;
    thumbnail: string;
    original: string;
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
