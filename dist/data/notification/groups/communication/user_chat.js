const sample = {
    message: "Hello, this is a test message",
    deepLink: "https://chat.wildster.com/private-chat/123456789",
    senderName: "John Doe",
};
const variables = {
    message: "Message content",
    deepLink: "Link to the chat",
    senderName: "Name of the sender",
};
export const UserChatNotification = {
    id: "user-chat",
    title: "New user messages",
    description: "Get notified when a user sends your business a new message.",
    parmas: {
        sample,
        variables,
    },
};
