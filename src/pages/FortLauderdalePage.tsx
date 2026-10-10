import React from 'react';
import type { PageProps } from '../routes';
import { FortLauderdalePage } from '../components/FortLauderdalePage';

/** Fort Lauderdale service area (/fort-lauderdale-med-spa-bookkeeping). */
export default function Page({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return <FortLauderdalePage onNavigate={onNavigate} onBookCall={onBookCall} onReadPost={onReadPost} />;
}
