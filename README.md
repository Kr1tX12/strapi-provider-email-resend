## Как подключить

В `config/plugins.js` укажите провайдера:

```js
email: {
  config: {
    provider: 'strapi-provider-email-resend-v5',
    providerOptions: {
      apiKey: process.env.RESEND_API_KEY,
    },
    settings: {
      defaultFrom: 'no-reply@yourdomain.com',
      defaultReplyTo: 'support@yourdomain.com',
    },
  },
},
```

Дальше сами
