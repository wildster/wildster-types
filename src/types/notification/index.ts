export interface NotificationType {
  id: string;
  title: string;
  description: string;
  parmas: {
    variables: Record<string, string>;
    sample: any;
  };
  // channels: {
  //   sms: {
  //     allowed: boolean;
  //     implicit?: boolean;
  //   };
  //   email: {
  //     allowed: boolean;
  //     implicit?: boolean;
  //   };
  //   push: {
  //     allowed: boolean;
  //     implicit?: boolean;
  //   };
  // };
}

export interface NotificationGroup {
  id: string;
  title: string;
  description: string;
  notifications: NotificationType[];
}
