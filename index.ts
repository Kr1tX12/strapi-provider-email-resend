import { Resend } from "resend";

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

export default ({ config }: { config: ProviderOptions & Settings }) => {
  const resend = new Resend(config.apiKey);

  return {
    send: async (options: SendOptions): Promise<void> => {
      const {
        from = config.defaultFrom,
        replyTo = config.defaultReplyTo,
        to,
        cc,
        bcc,
        subject,
        text,
        html,
        ...rest
      } = options;

      try {
        await resend.emails.send({
          from,
          to,
          cc,
          bcc,
          replyTo,
          subject,
          text,
          html,
          react: null,
          ...rest,
        });
      } catch (error) {
        console.error("Resend email error:", error);
        throw error;
      }
    },
  };
};
