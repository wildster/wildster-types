import { NotificationType } from "../../../../types/notification/index.js";
export interface UserChatNotificationParams {
    message: string;
    deepLink: string;
    senderName: string;
}
export declare const UserChatNotification: NotificationType;
