import React from 'react';
import type { PageProps } from '../routes';
import { ServiceDetailPage, FINANCIAL_REPORTING } from '../components/ServiceDetailPage';

/** Financial reporting service (/medspa-financial-reporting). */
export default function Page({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return <ServiceDetailPage content={FINANCIAL_REPORTING} onNavigate={onNavigate} onBookCall={onBookCall} onReadPost={onReadPost} />;
}
