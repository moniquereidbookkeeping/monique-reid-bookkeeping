import React from 'react';
import type { PageProps } from '../routes';
import { BlogListPage } from '../components/BlogListPage';

/** Article list (/blog). */
export default function Page({ onBookCall, onReadPost }: PageProps) {
  return <BlogListPage onReadPost={onReadPost} onBookCall={onBookCall} />;
}
