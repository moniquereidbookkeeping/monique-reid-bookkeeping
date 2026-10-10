import React from 'react';
import type { PageProps } from '../routes';
import { NotFoundPage } from '../components/NotFoundPage';

/** Unknown address (served as 404.html). */
export default function Page({ onNavigate }: PageProps) {
  return <NotFoundPage onNavigate={onNavigate} />;
}
