import { NotificationType } from "../../../../types/notification/index.js";
import { NotificationVariable } from "../../types.js";

export interface UserChatNotificationParams {
  message: string;
  deepLink: string;
  senderName: string;
}

const sample: UserChatNotificationParams = {
  message: "Hello, this is a test message",
  deepLink: "https://chat.wildster.com/private-chat/123456789",
  senderName: "John Doe",
};

const variables: NotificationVariable<UserChatNotificationParams> = {
  message: "Message content",
  deepLink: "Link to the chat",
  senderName: "Name of the sender",
};

export const UserChatNotification: NotificationType = {
  id: "user-chat",
  title: "New user messages",
  description: "Get notified when a user sends your business a new message.",
  parmas: {
    sample,
    variables,
  },
};
