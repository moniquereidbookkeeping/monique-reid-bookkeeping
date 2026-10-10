import {StrictMode, lazy} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import { pageTable, pageFile, type PageProps } from './routes';
import { parsePath } from './router';
import type { ComponentType } from 'react';
import './fonts.css';
import './index.css';

// Each page is a separate download, fetched the first time it is shown (src/routes.ts). The prerendered HTML
// links the current page's code with <link rel="modulepreload">, so it arrives alongside this file.
const loaders = import.meta.glob<{ default: ComponentType<PageProps> }>('./pages/*.tsx');
const pages = pageTable(loaders, (load) => lazy(load));

// Start downloading a page's code as soon as the visitor points at, focuses or touches a link to it, so opening
// it doesn't wait for the download after the click. Nothing is fetched for links the visitor doesn't reach for.
const started = new Set<string>();
const startLoading = (e: Event) => {
  const link = e.target instanceof Element ? e.target.closest<HTMLAnchorElement>('a[href^="/"]') : null;
  if (!link) return;
  const file = pageFile(parsePath(new URL(link.href).pathname).page);
  if (started.has(file)) return;
  started.add(file);
  loaders[file]?.();
};
for (const type of ['pointerover', 'focusin', 'touchstart']) document.addEventListener(type, startLoading, { passive: true });

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App pages={pages} />
  </StrictMode>
);

// Built pages arrive with their HTML already in place, so React attaches to it instead of redrawing
// the page (faster first paint, no layout jump). The dev server sends an empty root, so it renders.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
