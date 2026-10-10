import React from 'react';
import type { PageProps } from '../routes';
import { ServiceDetailPage, MONTHLY_BOOKKEEPING } from '../components/ServiceDetailPage';

/** Monthly bookkeeping service (/monthly-bookkeeping). */
export default function Page({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return <ServiceDetailPage content={MONTHLY_BOOKKEEPING} onNavigate={onNavigate} onBookCall={onBookCall} onReadPost={onReadPost} />;
}
