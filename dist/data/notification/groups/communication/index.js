import { ChatDigestNotification } from "./chat_digest.js";
import { PrivateChatNotification } from "./private_chat.js";
import { SupportChatNotification } from "./support_chat.js";
import { UserChatNotification } from "./user_chat.js";
export const CommunicationNotificationGroup = {
    id: "communication",
    title: "Communication",
    description: "Notifications related to Wildster Chat",
    notifications: [
        PrivateChatNotification,
        UserChatNotification,
        SupportChatNotification,
        ChatDigestNotification,
    ],
};
