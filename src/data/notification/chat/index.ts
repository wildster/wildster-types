import { NotificationFamily } from "../../../types/notification/index.js";
import { DialiyChatDigest } from "./chat-digest.js";
import {
  ProviderChatDirectMessage,
  SupportChatDirectMessage,
  WildsterSupportDirectMessage,
} from "./direct-message.js";

export const DirectMessageNotificationFamily: NotificationFamily = {
  id: "direct-message",
  title: "Direct Message",
  description: "Notifications related to Wildster Chat",
  notifications: [
    WildsterSupportDirectMessage,
    ProviderChatDirectMessage,
    SupportChatDirectMessage,
  ],
};

export const ChatDigestNotificationFamily: NotificationFamily = {
  id: "chat-digest",
  title: "Chat Digest",
  description: "Regular digest of unread messages in your chats",
  notifications: [DialiyChatDigest],
};
