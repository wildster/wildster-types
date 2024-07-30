export interface CheckoutManifest {
    type: "space";
    info: {
        name: string;
        providerName: string;
        image: string;
        timings: {
            isTimeSameAcrossAll: boolean;
            dates: [string, string][];
        };
    };
    maxParticipants: number;
    pricings: {
        id: "weekly" | "monthly" | "dropIn" | "oneTime";
        perParticipant: boolean;
        total: number;
        dueNow: number;
        label: string;
        hint?: string;
        schedules?: {
            id: string;
            dueOn: string;
            price: number;
        }[];
        recurring?: {
            id: string;
            price: number;
            recurrence: "month_1" | "month_15" | "week_1";
        };
    }[];
    options: {
        autoEnroll: boolean;
        formsIds: string[];
        waiverIds: string[];
    };
    cancellationPolicy: {
        cancellationPolicyId: string;
        description: string;
        conditions: ({
            isEnd: false;
            startDate: string;
            endDate: string;
            refundAmount: number;
            refundAmountType: "percentage" | "flat";
        } | {
            isEnd: true;
            startDate: string;
        })[];
    };
    resourceIds: {
        scheduleId: string;
        locationId: string;
        programId: string;
        providerId: string;
    };
    flags: {
        canReserve: boolean;
        error?: string;
    };
    cleaning?: {
        price: number;
        hourly: boolean;
        canOptForCleaning: boolean;
    };
    space?: {
        marketplace: "player" | "coach";
        usecase: string;
        timings: {
            trackId: string;
            startTime: string;
            endTime: string;
        }[];
    };
}
export interface OrderManifest {
    orderItems: {
        id: string;
        participantId: string;
        description: string;
        quantity: number;
        enrollmentIds: string[];
    }[];
    charges?: {
        id: string;
        type: "charge" | "refund";
        name: string;
        dueOn: string;
        price: number;
    }[];
    recurring?: {
        id: string;
        price: number;
        recurrence: "month_1" | "month_15" | "week_1";
    };
    state: any;
}
