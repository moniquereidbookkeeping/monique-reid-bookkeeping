import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  ArrowRight,
  Lightbulb,
  Info,
  BookOpen,
} from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';
import { BlogSection } from '../types';

interface BlogPostPageProps {
  slug: string;
  onBack: () => void;
  onBookCall: () => void;
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const renderSection = (section: BlogSection, index: number) => {
  switch (section.type) {
    case 'intro':
      return (
        <p key={index} className="text-lg text-[#57534E] leading-relaxed font-normal border-l-4 border-[#D4AF37] pl-5 py-1 italic">
          {section.text}
        </p>
      );

    case 'heading':
      return (
        <h2 key={index} className="text-xl sm:text-2xl font-serif font-bold text-[#1A2E40] mt-10 mb-2 leading-tight">
          {section.heading}
        </h2>
      );

    case 'paragraph':
      return (
        <p key={index} className="text-base text-[#57534E] leading-[1.8]">
          {section.text}
        </p>
      );

    case 'list':
      return (
        <ul key={index} className="space-y-3 pl-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#57534E] leading-relaxed">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'callout':
      return (
        <div key={index} className="rounded-xl border border-[#D4AF37]/40 bg-[#FAF8F5] p-5 space-y-2">
          <div className="flex items-center gap-2 text-[#1A2E40]">
            <Info className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">{section.heading}</span>
          </div>
          <p className="text-sm text-[#57534E] leading-relaxed">{section.text}</p>
        </div>
      );

    case 'tip':
      return (
        <div key={index} className="rounded-xl border border-[#1A2E40]/20 bg-[#1A2E40]/5 p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A2E40]">{section.heading}</span>
          </div>
          <p className="text-sm text-[#57534E] leading-relaxed">{section.text}</p>
        </div>
      );

    default:
      return null;
  }
};

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onBack, onBookCall }) => {
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.metaDescription;
        document.head.appendChild(meta);
      }
    }
    return () => {
      document.title = 'Monique Reid Bookkeeping | MedSpa & Aesthetic Practice QuickBooks Specialist';
    };
  }, [post]);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <p className="text-[#57534E]">Article not found.</p>
        <button onClick={onBack} className="mt-4 text-[#D4AF37] font-semibold underline cursor-pointer">
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-[#1A2E40] text-white pt-10 pb-14 border-b border-[#D4AF37]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#E5C765] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Articles
          </button>

          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#E2E8F0]/70">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              Monique Reid
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              {formatDate(post.publishedDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              {post.readingTime} min read
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="py-12 bg-[#FDFCFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-8 pb-6 border-b border-[#E2E8F0]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-[11px] font-semibold text-[#1A2E40]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content sections */}
          <div className="space-y-6">
            {post.content.map((section, i) => renderSection(section, i))}
          </div>

          {/* End CTA */}
          <div className="mt-14 pt-10 border-t border-[#E2E8F0]">
            <div className="rounded-2xl bg-[#1A2E40] p-6 sm:p-8 text-white text-center space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                Ready to talk about your practice?
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                Book a complimentary 20-minute Financial Clarity Call
              </h3>
              <p className="text-sm text-[#E2E8F0] font-light leading-relaxed max-w-md mx-auto">
                Tell me what is happening with your books and I will outline a clear path forward — no obligation.
              </p>
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm transition-all shadow-[0_4px_14px_rgba(212,175,55,0.3)] border border-[#FFF5DE]/60 cursor-pointer"
              >
                Book Your Free Clarity Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
