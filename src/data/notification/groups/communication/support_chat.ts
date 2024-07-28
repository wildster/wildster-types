import { NotificationType } from "../../../../types/notification/index.js";
import { NotificationVariable } from "../../types.js";

export interface SuppprtChatNotificationParams {
  message: string;
  deepLink: string;
}

const sample: SuppprtChatNotificationParams = {
  message: "Hello, this is a test message",
  deepLink: "https://chat.wildster.com/private-chat/123456789",
};

const variables: NotificationVariable<SuppprtChatNotificationParams> = {
  message: "Message content",
  deepLink: "Link to the chat",
};

export const SupportChatNotification: NotificationType = {
  id: "support-chat",
  title: "New message from Wildster Support",
  description: "Get notified when a Wildster sends you a new message.",
  parmas: {
    sample,
    variables,
  },
};
