import React from 'react';
import type { PageProps } from '../routes';
import { ServiceDetailPage, QUICKBOOKS_SETUP } from '../components/ServiceDetailPage';

/** QuickBooks setup service (/quickbooks-setup-medspa). */
export default function Page({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return <ServiceDetailPage content={QUICKBOOKS_SETUP} onNavigate={onNavigate} onBookCall={onBookCall} onReadPost={onReadPost} />;
}
