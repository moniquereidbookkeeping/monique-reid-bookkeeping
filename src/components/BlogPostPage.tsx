import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  ArrowRight,
  Lightbulb,
  Info,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '../data/blogPosts';
import { pathFor } from '../router';
import { PageView } from '../types';
import { BlogCover } from './BlogCover';
import { BlogSection } from '../types';

interface BlogPostPageProps {
  slug: string;
  onBack: () => void;
  onBookCall: () => void;
  onReadPost: (slug: string) => void;
  onNavigate: (page: PageView) => void;
}

/** Two other articles to read next: same category first, then the newest. */
const relatedPosts = (slug: string, category: string) =>
  blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) =>
      Number(b.category === category) - Number(a.category === category) ||
      b.publishedDate.localeCompare(a.publishedDate),
    )
    .slice(0, 2);

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const renderSection = (section: BlogSection, index: number) => {
  switch (section.type) {
    case 'intro':
      return (
        <p
          key={index}
          className="text-lg sm:text-xl text-[#44403C] leading-relaxed font-normal border-l-4 border-[#D4AF37] pl-5 py-1.5 italic text-balance"
        >
          {section.text}
        </p>
      );

    case 'heading':
      return (
        <h2
          key={index}
          className="text-xl sm:text-2xl font-serif font-bold text-[#1A2E40] mt-12 mb-3 leading-tight"
        >
          {section.heading}
        </h2>
      );

    case 'paragraph':
      return (
        <p key={index} className="text-[15px] text-[#57534E] leading-[1.85]">
          {section.text}
        </p>
      );

    case 'list':
      return (
        <ul key={index} className="space-y-3 pl-1 my-2">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3.5 text-[15px] text-[#57534E] leading-relaxed">
              <span className="mt-[7px] w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'callout':
      return (
        <div
          key={index}
          className="rounded-xl border border-[#D4AF37]/50 bg-gradient-to-br from-[#FAF8F5] to-[#FFF9EC] p-5 sm:p-6 space-y-2 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
              <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#8A6A00]">
              {section.heading}
            </span>
          </div>
          <p className="text-sm text-[#57534E] leading-relaxed pl-9">{section.text}</p>
        </div>
      );

    case 'tip':
      return (
        <div
          key={index}
          className="rounded-xl border border-[#1A2E40]/15 bg-gradient-to-br from-[#1A2E40]/5 to-[#1A2E40]/8 p-5 sm:p-6 space-y-2 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#1A2E40]/10 flex items-center justify-center shrink-0">
              <Lightbulb className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#1A2E40]">
              {section.heading}
            </span>
          </div>
          <p className="text-sm text-[#57534E] leading-relaxed pl-9">{section.text}</p>
        </div>
      );

    case 'cta-inline':
      return (
        <div
          key={index}
          className="rounded-xl border border-[#D4AF37]/30 bg-[#1A2E40] p-5 sm:p-6 text-center space-y-2 my-2"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">{section.heading}</p>
          <p className="text-sm text-white/80 leading-relaxed">{section.text}</p>
        </div>
      );

    default:
      return null;
  }
};

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onBack, onBookCall, onReadPost, onNavigate }) => {
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    if (!post) return;

    const restore: Array<() => void> = [];

    // Set a <meta> value and remember how to put the old one back.
    const setMeta = (selector: string, make: () => HTMLMetaElement, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      const created = !el;
      if (!el) {
        el = make();
        document.head.appendChild(el);
      }
      const previous = el.getAttribute('content');
      el.setAttribute('content', value);
      restore.push(() => {
        if (created) el!.remove();
        else if (previous !== null) el!.setAttribute('content', previous);
      });
    };
    const named = (name: string) => () => Object.assign(document.createElement('meta'), { name });
    const prop = (property: string) => () => {
      const m = document.createElement('meta');
      m.setAttribute('property', property);
      return m;
    };

    document.title = post.metaTitle;
    setMeta('meta[name="description"]', named('description'), post.metaDescription);
    setMeta('meta[property="og:type"]', prop('og:type'), 'article');
    setMeta('meta[property="og:title"]', prop('og:title'), post.metaTitle);
    setMeta('meta[property="og:description"]', prop('og:description'), post.metaDescription);
    setMeta('meta[name="twitter:title"]', named('twitter:title'), post.metaTitle);
    setMeta('meta[name="twitter:description"]', named('twitter:description'), post.metaDescription);

    return () => {
      restore.forEach((fn) => fn());
    };
  }, [post]);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <p className="text-[#57534E]">Article not found.</p>
        <a href="/blog" onClick={(e) => { e.preventDefault(); onBack(); }} className="inline-block text-center mt-4 text-[#D4AF37]! font-semibold underline cursor-pointer">
          Back to Blog
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFA]">

      {/* ── Hero cover image with overlay ── */}
      <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden">
        <BlogCover category={post.category} image={post.coverImage} wide className="absolute inset-0 w-full h-full" />
        {/* Layered gradient: transparent top → dark navy bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-[#0D1B2A]/15" />

        {/* Breadcrumb nav inside image */}
        <div className="absolute top-5 left-4 sm:left-8">
          <a
            href={pathFor('blog')}
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="flex items-center gap-1.5 text-sm text-white/80 hover:text-[#D4AF37] transition-colors cursor-pointer bg-black/25 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Articles
          </a>
        </div>

        {/* Title + meta overlaid on image bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-0 pb-8 sm:pb-10">
          <div className="max-w-3xl lg:mx-auto space-y-3">
            {/* Category chip */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/90 text-[#1A2E40] text-sm font-bold uppercase tracking-widest">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight text-balance">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>
                  By{' '}
                  <a
                    href="/about"
                    rel="author"
                    onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                    className="text-white! font-semibold underline! decoration-[#D4AF37]/60! underline-offset-4 hover:decoration-[#D4AF37]!"
                  >
                    Monique Reid
                  </a>
                </span>
              </span>
              <span className="text-white/30">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Published <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time></span>
              </span>
              <span className="text-white/30">·</span>
              <span>
                Last updated <time dateTime={post.updatedDate ?? post.publishedDate}>{formatDate(post.updatedDate ?? post.publishedDate)}</time>
              </span>
              <span className="text-white/30">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                {post.readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <article className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[#E2E8F0]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1A2E40]/6 border border-[#1A2E40]/10 text-sm font-semibold text-[#1A2E40]"
              >
                <ChevronRight className="w-2.5 h-2.5 text-[#D4AF37]" />
                {tag}
              </span>
            ))}
          </div>

          {/* Content sections */}
          <div className="space-y-5">
            {post.content.map((section, i) => renderSection(section, i))}
          </div>

          {/* Author byline */}
          <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1A2E40] shrink-0 border-2 border-[#D4AF37]/40">
              <img
                src="/monique-reid-headshot.webp"
                alt="Monique Reid"
                width={48}
                height={48}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A2E40]">
                <a
                  href="/about"
                  rel="author"
                  onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                  className="text-[#1A2E40]! underline! decoration-[#D4AF37]! underline-offset-4 hover:text-[#8A6A00]!"
                >
                  Monique Reid
                </a>
              </p>
              <p className="text-sm text-[#57534E] leading-snug">
                QuickBooks Bookkeeper for MedSpas &amp; Aesthetic Practices
              </p>
              <p className="text-sm text-[#78716C] leading-snug">Intuit Certified QuickBooks ProAdvisor · Fort Lauderdale, FL</p>
            </div>
          </div>

          {/* Keep reading: related articles and the pages this topic leads to */}
          <nav aria-label="Keep reading" className="mt-10 pt-8 border-t border-[#E2E8F0] space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#8A6A00]">Keep reading</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts(post.slug, post.category).map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/blog/${p.slug}`}
                    onClick={(e) => { e.preventDefault(); onReadPost(p.slug); }}
                    className="group block h-full rounded-xl border border-[#E2E8F0] bg-white p-4 hover:border-[#D4AF37] transition-colors"
                  >
                    <span className="block text-base font-serif font-bold text-[#1A2E40] leading-snug group-hover:text-[#8A6A00]">{p.title}</span>
                    <span className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-[#57534E]">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[15px] text-[#57534E] leading-relaxed">
              Want this handled for you? See the{' '}
              <a href={pathFor('services')} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                className="font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]">
                MedSpa bookkeeping services
              </a>
              , a{' '}
              <a href={pathFor('quickbooks-cleanup')} onClick={(e) => { e.preventDefault(); onNavigate('quickbooks-cleanup'); }}
                className="font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]">
                QuickBooks cleanup
              </a>{' '}
              if your books are behind, and{' '}
              <a href={pathFor('pricing')} onClick={(e) => { e.preventDefault(); onNavigate('pricing'); }}
                className="font-semibold text-[#1A2E40] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#8A6A00]">
                flat monthly pricing
              </a>
              .
            </p>
          </nav>

          {/* End CTA */}
          <div className="mt-10">
            <div className="rounded-2xl bg-gradient-to-br from-[#1A2E40] to-[#0D1B2A] p-6 sm:p-8 text-white text-center space-y-4 border border-[#D4AF37]/20 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
                ✦ Ready to Talk About Your Practice?
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                Book a Complimentary 20-Minute Financial Clarity Call
              </h3>
              <p className="text-sm text-[#E2E8F0] font-light leading-relaxed max-w-md mx-auto">
                Share what's happening with your books and get a clear path forward — no obligation.
              </p>
              <a href="/contact"
                onClick={(e) => { e.preventDefault(); onBookCall(); }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-sm transition-all shadow-[0_4px_14px_rgba(212,175,55,0.35)] border border-[#FFF5DE]/60 cursor-pointer"
              >
                Book Your Free 20-Min Clarity Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <a
              href={pathFor('blog')}
              onClick={(e) => { e.preventDefault(); onBack(); }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A2E40]/60 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to All Articles
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
