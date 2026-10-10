import React from 'react';
import type { PageProps } from '../routes';
import { PrivacyPage } from '../components/PrivacyPage';

/** Privacy policy (/privacy). */
export default function Page({ onNavigate, onBookCall }: PageProps) {
  return <PrivacyPage onNavigate={onNavigate} onBookCall={onBookCall} />;
}
