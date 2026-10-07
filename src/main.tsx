import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './fonts.css';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Built pages arrive with their HTML already in place, so React attaches to it instead of redrawing
// the page (faster first paint, no layout jump). The dev server sends an empty root, so it renders.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
