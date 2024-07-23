import { NotificationGroup } from "../../types/notification/index.js";

export const Notifications: NotificationGroup[] = [
  {
    id: "communication",
    title: "Communication",
    description: "Notifications related to Wildster Chat",
    notifications: [
      {
        id: "private-chat",
        title: "New team messages",
        description: "Get notified when a team member sends you a new message.",
        channels: {
          sms: {
            allowed: false,
          },
          email: {
            allowed: false,
          },
          push: {
            allowed: true,
          },
        },
      },
      {
        id: "support-chat",
        title: "New support messages",
        description:
          "Get notified when a user sends your business a new message.",
        channels: {
          sms: {
            allowed: false,
          },
          email: {
            allowed: false,
          },
          push: {
            allowed: true,
          },
        },
      },
      {
        id: "chat-digest",
        title: "Summary of unread messages",
        description: "Regular digest of unread messages in your chats",
        channels: {
          sms: {
            allowed: true,
          },
          email: {
            allowed: true,
          },
          push: {
            allowed: true,
          },
        },
      },
    ],
  },
];
