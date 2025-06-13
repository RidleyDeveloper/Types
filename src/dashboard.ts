import { MarketConditions } from "./property";

export interface Dashboard {
    confirmedPropertyDetails: PropertyDetailInfo;
    conciergeCalls: ConciergeCalls[];
    addresses: Address[];
    onboardingComplete: boolean;
    tasks: {
        [key: string]: { // property address string 
            [key: string]: { // stage aka PLANNNING or ONBOARDING or HOME_PREP
                [key: string]: { // task aka COMPLETE_INTAKE_FORM or COMPLETE_CONCIERGE_CALL
                    status: string;
                };
            };
        };
    };
    currentProperty: string;
    id: string;
};

export interface PropertyDetailInfo {
    [key: string]: {
        intakeForm: IntakeForm
        intakeFormComplete: boolean;

        propertyCreateInProgress: boolean;
        propertyId: string;
        propertyReportId: number;
        propertySlug: string;
        propertyValue: PropertyValue;
        propertyValuation: PropertyValuation;
        propertySummary: string | null;

        plan: "ESSENTIAL" | "ESSENTIAL_PLUS_LEGAL" | "NONE" | null;
        planDetails: {
            purchaseDate: string | null;
            purchasePrice: string | null;
        } | null;
    };
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
};


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
    category: string; // e.g., "kitchen", "bathroom", etc.
    upgrade: string; // e.g., "new cabinets", "new countertops", etc.
    when: string; // e.g., "2022", "2023", etc. date format yyyy-mm-dd
    cost: string; // e.g., "$5000", "$10000", etc.
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
    monthlyFee: string; // e.g., "$100", "$200", etc.
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
    tax_assessed_value: {
        amount: number | null;
    } | null;
}