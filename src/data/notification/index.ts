import { NotificationGroup } from "../../types/notification/index.js";
import {
  ChatDigestNotificationFamily,
  DirectMessageNotificationFamily,
} from "./chat/index.js";

export const Notifications: NotificationGroup[] = [
  {
    id: "communication",
    title: "Communication",
    familiy: [DirectMessageNotificationFamily, ChatDigestNotificationFamily],
  },
];
