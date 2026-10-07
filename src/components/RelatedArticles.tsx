import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface RelatedArticlesProps {
  /** Article slugs in order of preference. Only published articles are shown, so scheduled ones never link to a 404. */
  slugs?: string[];
  /** Without slugs, show the newest published articles. */
  limit?: number;
  heading: string;
  intro?: string;
  onReadPost: (slug: string) => void;
}

/** A short list of guides linking a service or landing page to the articles that support it. */
export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ slugs, limit = 3, heading, intro, onReadPost }) => {
  const posts = slugs
    ? slugs.map((slug) => blogPosts.find((p) => p.slug === slug)).filter((p): p is (typeof blogPosts)[number] => !!p)
    : [...blogPosts].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
  const shown = posts.slice(0, limit);
  if (shown.length === 0) return null;

  return (
    <section className="py-12 lg:py-14 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A2E40] leading-tight">{heading}</h2>
          {intro && <p className="mt-2 text-base sm:text-lg text-[#4A5568] leading-relaxed">{intro}</p>}
        </div>
        <ul className="flex flex-wrap justify-center gap-4">
          {shown.map((p) => (
            <li key={p.slug} className="w-full md:w-[calc((100%-2rem)/3)]">
              <a
                href={`/blog/${p.slug}`}
                onClick={(e) => { e.preventDefault(); onReadPost(p.slug); }}
                className="group flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-[#FDFCFA] p-5 hover:border-[#D4AF37] transition-colors"
              >
                <span className="text-base font-serif font-bold text-[#1A2E40] leading-snug group-hover:text-[#8A6A00]">{p.title}</span>
                <span className="mt-2 text-sm text-[#57534E] leading-relaxed flex-1">{p.excerpt}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1A2E40]">
                  Read the guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
