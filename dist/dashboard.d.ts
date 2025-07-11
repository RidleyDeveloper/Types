import { MarketConditions } from "./property";
export type PlanType = "ESSENTIAL" | "ESSENTIAL_LEGAL" | "ESSENTIAL_SPLIT" | "ESSENTIAL_LEGAL_SPLIT" | "ESSENTIAL_UNKNOWN" | "NONE" | null;
export interface PlanDetails {
    purchaseDate: number;
    purchasePrice: number;
    purchasePriceExcludingTax: number;
    paymentId: string;
}
export interface Dashboard {
    confirmedPropertyDetails: PropertyDetailInfo;
    conciergeCalls: ConciergeCalls[];
    addresses: Address[];
    onboardingComplete: boolean;
    firstTimeOnDashboard?: boolean;
    tasks: {
        [key: string]: {
            [key: string]: {
                [key: string]: {
                    status: string;
                };
            };
        };
    };
    currentProperty: string;
    id: string;
}
export interface RidleyNotification {
    id: string;
    createdAt: number;
    message: string;
    category: string;
    seen: boolean;
    actionUrl: string;
    meta: {
        [key: string]: string | number | boolean | null;
    };
}
export interface PropertyDetailInfo {
    [key: string]: UserPropertyDetails;
}
export interface UserPropertyDetails {
    intakeForm: IntakeForm;
    intakeFormComplete: boolean;
    propertyCreateInProgress: boolean;
    propertyId: string;
    propertyReportId: number;
    propertySlug: string;
    propertyValue: PropertyValue;
    propertyValuation: PropertyValuation;
    propertyValuationInProgress?: boolean;
    propertySummary: string | null;
    onboardingHomeValue: number | null;
    sellingTimeline?: string | null;
    planType: PlanType;
    planPurchaseDetails?: RidleyPurchase[] | null;
}
export interface RidleyPurchase {
    createDate: number;
    planType: string;
    pricePaid: number;
    priceExcludingTax: number;
    paymentId: string;
}
export interface ConciergeCalls {
    meetingLink: string;
    eventId: string;
    startTime: string;
    endTime: string;
    timeZone: string;
}
export interface Address {
    zip: string;
    state: string;
    city: string;
    street: string;
    detailedAddress: {
        country: string;
        distance: number;
        city: string;
        postalCode: string;
        latitude: number;
        confidence: string;
        county: string;
        addressLabel: string;
        layer: string;
        number: string;
        formattedAddress: string;
        countryFlag: string;
        street: string;
        countryCode: string;
        stateCode: string;
        geometry: {
            type: string;
            coordinates: [number, number];
        };
        state: string;
        longitude: number;
    };
}
export interface PropertyValue {
    avm: {
        high: null | number;
        value: null | number;
        low: null | number;
        fsd: null | number;
    } | null;
    suggestedValue: {
        high: null | number;
        value: null | number;
        low: null | number;
        fsd: null | number;
    } | null;
    comparableValue: {
        high: null | number;
        value: null | number;
        low: null | number;
        fsd: null | number;
    } | null;
}
export interface IntakeForm {
    currentPage: number;
    squareFootage: string;
    lotSize: string;
    bedrooms: string;
    bathrooms: string;
    yearBuilt: string;
    garageParking: string;
    garageSize: string;
    propertyType: string;
    upgrades: Upgrades;
    upgradesDetailsList: UpgradesDetailsList[];
    knownIssues: boolean;
    knownIssuesDetails: KnownIssuesDetails;
    hoa: boolean;
    hoaDetails: HoaDetails;
    locationPerks: LocationPerks;
    pricingStrategy: PicingStrategy;
    recentAppraisal: boolean;
    recentAppraisalValue: string;
}
export interface UpgradesDetailsList {
    category: string;
    upgrade: string;
    when: string;
    cost: string;
}
export interface Upgrades {
    kitchen: boolean;
    bathroom: boolean;
    roof: boolean;
    hvac: boolean;
    windows: boolean;
    plumbing: boolean;
    electrical: boolean;
    other: boolean;
}
export interface HoaDetails {
    monthlyFee: string;
}
export interface KnownIssuesDetails {
    moreInfo: string;
}
export interface LocationPerks {
    mountainViews: boolean;
    waterViews: boolean;
    cornerLot: boolean;
    backsToPark: boolean;
    walkable: boolean;
    other: boolean;
    otherDetails: string;
}
export interface PicingStrategy {
    MAX_PRICE: boolean;
    SELL_QUICK: boolean;
    BETWEEN: boolean;
}
export interface PropertyValuation {
    min_value: number;
    max_value: number;
    point_estimate: number;
    sources?: {
        har?: PropertySource;
        realtor?: PropertySource;
        zillow?: PropertySource;
        redfin?: PropertySource;
        compass?: PropertySource;
        countyoffice?: PropertySource;
        trulia?: PropertySource;
    };
    market_conditions: MarketConditions;
    valuation_components: ValuationComponents;
}
export interface ValuationComponents {
    baseline_value: number;
    improvements_breakdown: ImprovementBreakdown[];
    improvements_summary?: string;
    improvements_value: number;
    market_adjustments: {
        daysOnMarketAdjustment: number;
        listToSoldAdjustment: number;
        trendAdjustment: number;
        inventoryAdjustment: number;
    };
    unique_features_breakdown: UniqueFeaturesBreakdown[];
    unique_features_summary?: string;
    unique_features_value: number;
}
export interface PropertySource {
    updatedAt?: number;
    content: PropertySourceValue;
    search: {
        author: string | null;
        id: string;
        title: string;
        url: string;
    };
}
export interface ImprovementBreakdown {
    ageFactor: number;
    cost: string;
    type: string;
    upgrade: string;
    value: number;
    when: string;
}
export interface UniqueFeaturesBreakdown {
    type: string;
    value: number;
    premium: number;
}
export interface PropertySourceValue {
    estimated_price: number | null;
    current_listing_price: number | null;
    zestimate: number | null;
    tax_assessed_value: {
        amount: number | null;
    } | null;
}
