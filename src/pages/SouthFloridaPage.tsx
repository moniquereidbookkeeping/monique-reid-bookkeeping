import React from 'react';
import type { PageProps } from '../routes';
import { SouthFloridaPage } from '../components/SouthFloridaPage';

/** South Florida service area (/medspa-bookkeeping-south-florida). */
export default function Page({ onNavigate, onBookCall, onReadPost }: PageProps) {
  return <SouthFloridaPage onNavigate={onNavigate} onBookCall={onBookCall} onReadPost={onReadPost} />;
}
