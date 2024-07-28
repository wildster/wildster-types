export interface NotificationType {
    id: string;
    title: string;
    description: string;
    parmas: {
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
