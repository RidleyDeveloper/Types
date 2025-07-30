import { Address } from "./dashboard";

export interface Onboarding {
    email: string; // primary key
    address?: Address;
    calendarLinkClicked?: boolean;
    createdAt?: number;
    updatedAt?: number;
    dashboardAccessGranted?: boolean;
    homeCondition?: string;
    homeValue?: number;
    name?: string;
    sellingTimeline?: string | null;
    supportLevel?: string; 
    meeting?: Meeting | null;
    meetingInfo?: MeetingInfo | null;
    quickListing?: QuickListing | null;
    buyerFlow?: BuyerFlow | null;
}

export interface Meeting {
    event: string;
    invitee: string;
}

export interface MeetingInfo {
    email: string;
    created_at: string;
    name: string;
}

export interface QuickListing {
    email: string;
    type: "QUICK_LISTING";
    address: Address;
    createdAt: number;
    updatedAt: number;
    listingPrice: number;
}

export interface BuyerFlow {
    email: string;
    type: "BUYER_FLOW";
    address: Address;
    createdAt: number;
    updatedAt: number;
    searchRadius?: number,
    lowPriceRange: number,
    highPriceRange: number,
}