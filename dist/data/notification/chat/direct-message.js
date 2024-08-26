export const WildsterSupportDirectMessage = {
    id: "wildster-support-direct-message",
    title: "New message from Wildster Support",
    description: "Get notified when a Wildster sends you a new message.",
    params: {
        variables: {
            message: "Message content",
            deepLink: "Link to the chat",
            senderName: "Name of the sender",
            channelName: "Name of the channel",
        },
        sample: {
            message: "Hello, this is a test message",
            deepLink: "https://chat.wildster.com/private-chat/123456789",
        },
    },
};
export const ProviderChatDirectMessage = {
    id: "provider-chat-direct-message",
    title: "New message from a team member",
    description: "Get notified when a team member sends you a new message.",
    params: {
        variables: {
            message: "Message content",
            deepLink: "Link to the chat",
            senderName: "Name of the sender",
            channelName: "Name of the channel",
        },
        sample: {
            message: "Hello, this is a test message",
            deepLink: "https://chat.wildster.com/private-chat/123456789",
            senderName: "John Doe",
        },
    },
};
export const SupportChatDirectMessage = {
    id: "support-chat-direct-message",
    title: "New message from User",
    description: "Get notified when a User sends you a new message.",
    params: {
        variables: {
            message: "Message content",
            deepLink: "Link to the chat",
            userName: "Name of the sender",
            channelName: "Name of the channel",
        },
        sample: {
            message: "Hello, this is a test message",
            deepLink: "https://chat.wildster.com/private-chat/123456789",
            userName: "John Doe",
        },
    },
};
