"use strict";
const resend_1 = require("resend");
module.exports = {
    init(providerOptions, settings) {
        const resend = new resend_1.Resend(providerOptions.apiKey);
        return {
            send: async (options) => {
                const { from = settings.defaultFrom, replyTo = settings.defaultReplyTo, to, cc, bcc, subject, text, html, ...rest } = options;
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
                        react: undefined,
                        ...rest,
                    });
                }
                catch (error) {
                    console.error("Resend email error:", error);
                    throw error;
                }
            },
        };
    },
};
