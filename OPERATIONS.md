# Run and review

Run npm test then npm run build. Open dist/index.html in a modern browser, or run npm start and visit http://localhost:3000.
The standalone HTML works without dependencies. If browser storage is blocked, use Export demo data before closing. Export is a backup file; import is not implemented.

## Vercel

Import the source directory into the user's Vercel project. vercel.json declares npm run build and dist as the output directory. No credentials or production configuration are included. This deployment would still be a public sample-data preview, not a production monitoring service. Access has been deferred by the user.

## Verification

Automated tests cover business hours across weekends, holidays and boundaries, acknowledgement alerts, status transitions, required evidence, immutable history, and HTML escaping. Browser checks should cover navigation, filtering, request editing and persistence, clinic editing, settings validation, export, reset, and responsive views.

## Production blockers

Authorisation for Google and WhatsApp; proof of group coverage; selected connector and account continuity; authenticated users; durable shared storage; holiday calendar; AI evaluation; scheduled workers; retries; audit identity; retention and deletion; backups and tested restoration; deployment logs and rollback.
Do not upload a browser demo export containing confidential information. Do not claim reliable AI monitoring based on this prototype.

## Verified on 13 November 2026

Twelve automated tests passed. Browser verification confirmed overview rendering, request evidence display, rejection of resolution without evidence, successful resolution with evidence, persistence after reload, settings display and demo reset. Responsive CSS is included but a separate mobile viewport test was not performed.
