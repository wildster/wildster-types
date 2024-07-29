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

  pricings: Partial<
    Record<
      "weekly" | "monthly" | "dropIn" | "fullTime",
      {
        perParticipant: boolean;
        total: number;
        dueNow: number;
        label: string;
        hint?: string;

        schedules?: {
          dueOn: string;
          price: number;
        }[];

        recurring?: {
          price: number;
          recurrence: "month_1" | "month_15" | "week_1";
        };
      }
    >
  >;

  options: {
    autoEnroll: boolean;
    formsIds: string[];
    waiverIds: string[];
  };

  cancellationPolicy: {
    cancellationPolicyId: string;
    description: string;
    conditions: {
      startDate: string;
      endDate: string;
      refundAmount: number;
      refundAmountType: "percentage" | "flat";
    }[];
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
}

export interface OrderManifest {
  resource: {
    providerId: string;
    participantIds: string[];
    programId: string;
    scheduleId: string;
    locationId: string;
  };

  chargeAmount: number;

  items: {
    type: "reservation";
    participantId: string;
    price: number;
    quantity: number;
    description: string;
  }[];

  futureCharges: { dueOn: number; amount: number }[];

  subscriptions: {
    dueOn: "1_st" | "15_th" | "sunday";
    amount: number;
  };
}
