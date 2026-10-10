import React from 'react';
import type { PageProps } from '../routes';
import { BookedPage } from '../components/BookedPage';

/** Booking confirmation (/booked). */
export default function Page({ onNavigate }: PageProps) {
  return <BookedPage onNavigate={onNavigate} />;
}
