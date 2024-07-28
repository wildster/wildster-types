const sample = {
    message: "Hello, this is a test message",
    deepLink: "https://chat.wildster.com/private-chat/123456789",
};
const variables = {
    message: "Message content",
    deepLink: "Link to the chat",
};
export const SupportChatNotification = {
    id: "support-chat",
    title: "New message from Wildster Support",
    description: "Get notified when a Wildster sends you a new message.",
    params: {
        sample,
        variables,
    },
};
