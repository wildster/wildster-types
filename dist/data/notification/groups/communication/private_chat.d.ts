import { NotificationType } from "../../../../types/notification/index.js";
export interface PrivateChatNotificationParams {
    channelName: string;
    message: string;
    deepLink: string;
    senderName: string;
}
export declare const PrivateChatNotification: NotificationType;
