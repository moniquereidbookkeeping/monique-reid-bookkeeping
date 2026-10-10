import React from 'react';
import type { PageProps } from '../routes';
import { PracticeTypePage, MEDICAL_WEIGHT_LOSS } from '../components/PracticeTypePage';

/** Medical weight-loss bookkeeping (/medical-weight-loss-bookkeeping). */
export default function Page({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return <PracticeTypePage content={MEDICAL_WEIGHT_LOSS} onNavigate={onNavigate} onBookCall={onBookCall} onReadPost={onReadPost} />;
}
