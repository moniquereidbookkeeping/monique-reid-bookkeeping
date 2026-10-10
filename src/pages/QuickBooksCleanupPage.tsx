import React from 'react';
import type { PageProps } from '../routes';
import { QuickBooksCleanupPage } from '../components/QuickBooksCleanupPage';

/** QuickBooks cleanup and catch-up (/quickbooks-cleanup). */
export default function Page({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return <QuickBooksCleanupPage onNavigate={onNavigate} onBookCall={onBookCall} onReadPost={onReadPost} />;
}
