import { NotificationType } from "../../../../types/notification/index.js";
import { NotificationVariable } from "../../types.js";

export interface ChatDigestNotificationParams {
  totalUnreadMessages: number;
  recentMessages: {
    channelName: string;
    message: string;
    senderName: string;
  }[];
  deepLink: string;
}

const sample: ChatDigestNotificationParams = {
  totalUnreadMessages: 10,
  recentMessages: [
    {
      channelName: "Private Chat",
      message: "Hello, this is a test message",
      senderName: "John Doe",
    },
    {
      channelName: "Private Chat",
      message: "Hello, this is a test message",
      senderName: "John Doe",
    },
  ],
  deepLink: "https://chat.wildster.com/private-chat/123456789",
};

const variables: NotificationVariable<ChatDigestNotificationParams> = {
  totalUnreadMessages: "Total unread messages",
  recentMessages: "Recent messages",
  deepLink: "Link to the chat",
};

export const ChatDigestNotification: NotificationType = {
  id: "chat-digest",
  title: "Summary of unread messages",
  description: "Regular digest of unread messages in your chats",
  parmas: {
    sample,
    variables,
  },
};
