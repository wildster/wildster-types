export interface NotificationType {
    id: string;
    title: string;
    description: string;
    params: {
        variables: Record<string, string>;
        sample: any;
    };
}
export interface NotificationGroup {
    id: string;
    title: string;
    description: string;
    notifications: NotificationType[];
}
