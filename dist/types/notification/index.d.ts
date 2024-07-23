export interface NotificationType {
    id: string;
    title: string;
    description: string;
    channels: {
        sms: {
            allowed: boolean;
            implicit?: boolean;
        };
        email: {
            allowed: boolean;
            implicit?: boolean;
        };
        push: {
            allowed: boolean;
            implicit?: boolean;
        };
    };
}
export interface NotificationGroup {
    id: string;
    title: string;
    description: string;
    notifications: NotificationType[];
}
