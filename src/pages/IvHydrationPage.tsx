import React from 'react';
import type { PageProps } from '../routes';
import { PracticeTypePage, IV_HYDRATION } from '../components/PracticeTypePage';

/** IV hydration bookkeeping (/iv-hydration-bookkeeping). */
export default function Page({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return <PracticeTypePage content={IV_HYDRATION} onNavigate={onNavigate} onBookCall={onBookCall} onReadPost={onReadPost} />;
}
