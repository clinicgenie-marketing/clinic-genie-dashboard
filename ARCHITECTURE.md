# Architecture

Iteration 1 is dependency free HTML, CSS and JavaScript. core.js contains pure working-minute and classification functions. index.template.html implements UI and demo records. build.mjs inlines the core into dist/index.html. localStorage holds version 1 demo state. No network calls or AI API calls are made.

## Proposed production boundary

Vercel hosts the interface and short server request handlers. Select durable database and an external WhatsApp connector after verifying groups and history coverage. Do not assume a persistent WhatsApp socket can run within a request handler. Gmail OAuth, token encryption, server-side identity checks, incremental mailbox cursors and scheduled ingestion are required.
Represent brands, clinics, accounts, contacts, conversations, messages, request items, evidence links, state events, proposed clinic changes and connector cursors as separate records. Provider message IDs must support idempotent ingestion. Keep provider-specific adapters isolated.
The runtime AI service should return schema-validated proposals grounded in message IDs. Humans can override decisions. Secrets remain server-side. Model input must exclude unnecessary patient information.
Production identity and hosting credentials have not been supplied. Neither shared mailbox is assumed to be a confirmed individual login identity. Agree exact authorised login identities before enabling live data.
