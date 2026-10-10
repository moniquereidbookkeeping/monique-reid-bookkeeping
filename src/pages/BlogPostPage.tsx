import React from 'react';
import type { PageProps } from '../routes';
import { BlogPostPage } from '../components/BlogPostPage';

/** One article (/blog/<slug>). */
export default function Page({ slug, onNavigate, onBookCall, onReadPost }: PageProps) {
  return <BlogPostPage slug={slug} onBack={() => onNavigate('blog')} onBookCall={onBookCall} onReadPost={onReadPost} onNavigate={onNavigate} />;
}
