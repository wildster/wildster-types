import { NotificationType } from "../../../types/notification/index.js";

export const DialiyChatDigest: NotificationType = {
  id: "dialiy-chat-digest",
  title: "Summary of unread messages",
  description: "Regular digest of unread messages in your chats",
  params: {
    variables: {
      totalUnreadMessages: "Total unread messages",
      recentMessages: "Recent messages",
      deepLink: "Link to the chat",
    },
    sample: {
      totalUnreadMessages: 10,
      recentMessages: [
        {
          channelName: "Private Chat",
          message: "Hello, this is a test message",
          senderName: "John Doe",
          unreadCount: 4,
        },
        {
          channelName: "Private Chat",
          message: "Hello, this is a test message",
          senderName: "John Doe",
          unreadCount: 6,
        },
      ],
      deepLink: "https://chat.wildster.com/private-chat/123456789",
    },
  },
};
