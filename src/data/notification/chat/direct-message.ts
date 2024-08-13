import { NotificationType } from "../../../types/notification/index.js";

export const WildsterSupportDirectMessage: NotificationType = {
  id: "wildster-support-direct-message",
  title: "New message from Wildster Support",
  description: "Get notified when a Wildster sends you a new message.",
  params: {
    variables: {
      message: "Message content",
      deepLink: "Link to the chat",
    },
    sample: {
      message: "Hello, this is a test message",
      deepLink: "https://chat.wildster.com/private-chat/123456789",
    },
  },
};

export const ProviderChatDirectMessage: NotificationType = {
  id: "provider-chat-direct-message",
  title: "New message from a team member",
  description: "Get notified when a team member sends you a new message.",
  params: {
    variables: {
      message: "Message content",
      deepLink: "Link to the chat",
      senderName: "Name of the sender",
    },
    sample: {
      message: "Hello, this is a test message",
      deepLink: "https://chat.wildster.com/private-chat/123456789",
      senderName: "John Doe",
    },
  },
};

export const SupportChatDirectMessage: NotificationType = {
  id: "support-chat-direct-message",
  title: "New message from User",
  description: "Get notified when a User sends you a new message.",
  params: {
    variables: {
      message: "Message content",
      deepLink: "Link to the chat",
      userName: "Name of the sender",
    },
    sample: {
      message: "Hello, this is a test message",
      deepLink: "https://chat.wildster.com/private-chat/123456789",
      userName: "John Doe",
    },
  },
};
