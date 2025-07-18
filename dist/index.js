"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resend_1 = require("resend");
exports.default = ({ config }) => {
    const resend = new resend_1.Resend(config.apiKey);
    return {
        send: async (options) => {
            const { from = config.defaultFrom, replyTo = config.defaultReplyTo, to, cc, bcc, subject, text, html, ...rest } = options;
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
            }
            catch (error) {
                console.error("Resend email error:", error);
                throw error;
            }
        },
    };
};
