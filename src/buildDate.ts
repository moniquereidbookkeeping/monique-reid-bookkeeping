// The day this copy of the site was built (YYYY-MM-DD, UTC). Vite replaces __BUILD_DATE__ with the same
// value in the browser bundle and the prerender bundle, so both agree on which articles are published.
declare const __BUILD_DATE__: string | undefined;

export const BUILD_DATE: string =
  typeof __BUILD_DATE__ === 'string' ? __BUILD_DATE__ : new Date().toISOString().slice(0, 10);
