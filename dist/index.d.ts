interface Settings {
    defaultFrom: string;
    defaultReplyTo: string;
}
interface SendOptions {
    from?: string;
    to: string | string[];
    cc?: string | string[];
    bcc?: string | string[];
    replyTo?: string;
    subject: string;
    text?: string;
    html?: string;
    [key: string]: unknown;
}
interface ProviderOptions {
    apiKey: string;
}
declare const _default: ({ config }: {
    config: ProviderOptions & Settings;
}) => {
    send: (options: SendOptions) => Promise<void>;
};
export default _default;
