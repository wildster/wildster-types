import { NotificationType } from "../../../../types/notification/index.js";
import { NotificationVariable } from "../../types.js";

export interface PrivateChatNotificationParams {
  channelName: string;
  message: string;
  deepLink: string;
  senderName: string;
}

const sample: PrivateChatNotificationParams = {
  channelName: "Private Chat",
  message: "Hello, this is a test message",
  deepLink: "https://chat.wildster.com/private-chat/123456789",
  senderName: "John Doe",
};

const variables: NotificationVariable<PrivateChatNotificationParams> = {
  channelName: "Name of the channel",
  message: "Message content",
  deepLink: "Link to the chat",
  senderName: "Name of the sender",
};

export const PrivateChatNotification: NotificationType = {
  id: "private-chat",
  title: "New team messages",
  description: "Get notified when a team member sends you a new message.",
  parmas: {
    sample,
    variables,
  },
};
