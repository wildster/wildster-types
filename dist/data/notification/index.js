import { ChatDigestNotificationFamily, DirectMessageNotificationFamily, } from "./chat/index.js";
export const Notifications = [
    {
        id: "communication",
        title: "Communication",
        familiy: [DirectMessageNotificationFamily, ChatDigestNotificationFamily],
    },
];
