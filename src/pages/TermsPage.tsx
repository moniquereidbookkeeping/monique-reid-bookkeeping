import React from 'react';
import type { PageProps } from '../routes';
import { TermsPage } from '../components/TermsPage';

/** Terms of service (/terms). */
export default function Page({ onNavigate, onBookCall }: PageProps) {
  return <TermsPage onNavigate={onNavigate} onBookCall={onBookCall} />;
}
