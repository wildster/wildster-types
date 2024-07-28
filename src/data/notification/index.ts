import { z } from "zod";
import { NotificationGroup } from "../../types/notification/index.js";
import { CommunicationNotificationGroup } from "./groups/communication/index.js";

export const Notifications: NotificationGroup[] = [
  CommunicationNotificationGroup,
];
