export interface GeoAttributes {
  regionCode: string;
  city: string;
  country: string;
  continent: string;
  ip: string;
  latitude: string;
  longitude: string;
}

export type BroadcastEvents = {
  provider_update: {
    providerId: string;
    name: string;
    reason:
      | "profile_update"
      | "created"
      | "internal_update"
      | "location_update";
  };
};

export type AnalyticsMessage = {
  collect_metrics: {
    timestamp: string;
  };
  search_results: {
    results: {
      activityId: string;
      providerId: string;
    }[];
  };
  program_open: {
    activityId: string;
    providerId: string;
  };
  checkout_open: {
    activityId: string;
    providerId: string;
  };
  order_placed: {
    activityId: string;
    providerId: string;
  };
};

export type PaymentMessage = {
  reconcile_invoice: {
    inbvoiceId: string;
  };
  auto_cancel_order: {
    orderId: string;
  };
  reservation_completed: {
    orderId: string;
  };
};

export type ChatMessage = {
  provider_updated: BroadcastEvents["provider_update"];
  user_updated: {
    name: string;
    userId: string;
    providerId: string;
  };
  message_added: {
    channelId: bigint;
    senderId: bigint;
    text: string;
    messageId: bigint;
    type: "user_chat" | "provider_chat" | "internal_chat" | "support_chat";
    channelName: string;
    reverseChannelName: string;
  };
};

export type IndexerMessage = {
  index_lookup: {
    resourceId: string;
    name: string;
    type: string;
    scopes?: string[];
    keywords?: string[];
    image?: string;
    deleted?: boolean;
  };
  config_update: {
    name: string;
    value: any;
  };
};

export type Message = {
  analytics: AnalyticsMessage;
  payments: PaymentMessage;
  chat: ChatMessage;
  indexer: IndexerMessage;
};
