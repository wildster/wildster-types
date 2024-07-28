const sample = {
    totalUnreadMessages: 10,
    recentMessages: [
        {
            channelName: "Private Chat",
            message: "Hello, this is a test message",
            senderName: "John Doe",
        },
        {
            channelName: "Private Chat",
            message: "Hello, this is a test message",
            senderName: "John Doe",
        },
    ],
    deepLink: "https://chat.wildster.com/private-chat/123456789",
};
const variables = {
    totalUnreadMessages: "Total unread messages",
    recentMessages: "Recent messages",
    deepLink: "Link to the chat",
};
export const ChatDigestNotification = {
    id: "chat-digest",
    title: "Summary of unread messages",
    description: "Regular digest of unread messages in your chats",
    params: {
        sample,
        variables,
    },
};
