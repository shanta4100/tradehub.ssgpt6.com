app/
  api/
    health/
      route.ts
    cron/
      daily/
        route.ts
  page.tsx
package.json
next.config.js (optional)