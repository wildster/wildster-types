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
  cancel_order: {
    orderId: string;
  };
  cancel_charge: {
    chargeId: string;
  };
  confirm_charge: {
    orderId: string;
  };
  auto_cancel_order: {
    orderId: string;
  };
  delete_order: {
    orderId: string;
  };
  on_order_requirement_updated: {
    orderId: string;
  };
  process_incomming_order: {
    orderId: string;
  };
  confirm_order: {
    orderId: string;
  };
  on_order_signature_complete: {
    orderId: string;
  };
  on_order_reservation_complete: {
    orderId: string;
    success: boolean;
    error: string;
    cancelOrder: boolean;
    spotIds?: string[];
    enrollmentIds?: string[];
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
    messageId: bigint;
    type: "user_chat" | "provider_chat" | "internal_chat" | "support_chat";
  };
  dispatch_chat_digest: {
    userId: bigint;
  };
  internal_prepare_push_notification: {
    channelId: bigint;
    messageId: bigint;
    userId: bigint;
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

export type UserMessage = {
  provider_activity_submitted_for_review: {
    activityId: string;
    providerId: string;
  };
};

export type SpaceMessage = {
  reserve_space: {
    input: {
      orderId: string;
      parentId: string;
      spaceId: string;
      input: any;
      itemIds: string[];
    };
  };
};

export type ClassMessage = {
  process_signature_submission: {
    input: {
      orderId: string;
      parentId: string;
      formIds: string[];
      waiverIds: string[];
      participantIds: string[];
      programId: string;
    };
  };
};

export type MessagingMessage = {
  send_email: {
    data: any;
  };
  send_sms: {
    data: any;
  };
};

export type NotificationMessage = {
  send_notification: {
    userId: string;
    type: string;
    variables: Record<string, any>;
  };
  internal_send_email: {
    to: string;
    body: string;
    from: string;
    subject: string;
  };
  internal_send_push: {
    userId: string;
    title: string;
    body: string;
    subTitle: string;
    count: number;
    payload: any;
  };
};

export type Message = {
  analytics: AnalyticsMessage;
  payments: PaymentMessage;
  chat: ChatMessage;
  indexer: IndexerMessage;
  user: UserMessage;
  space: SpaceMessage;
  class: ClassMessage;
  messaging: MessagingMessage;
  notification: NotificationMessage;
};
