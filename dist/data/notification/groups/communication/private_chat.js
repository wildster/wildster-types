const sample = {
    channelName: "Private Chat",
    message: "Hello, this is a test message",
    deepLink: "https://chat.wildster.com/private-chat/123456789",
    senderName: "John Doe",
};
const variables = {
    channelName: "Name of the channel",
    message: "Message content",
    deepLink: "Link to the chat",
    senderName: "Name of the sender",
};
export const PrivateChatNotification = {
    id: "private-chat",
    title: "New team messages",
    description: "Get notified when a team member sends you a new message.",
    params: {
        sample,
        variables,
    },
};
