import { NotificationType } from "../../../../types/notification/index.js";
export interface ChatDigestNotificationParams {
    totalUnreadMessages: number;
    recentMessages: {
        channelName: string;
        message: string;
        senderName: string;
    }[];
    deepLink: string;
}
export declare const ChatDigestNotification: NotificationType;
