import React from 'react';
import { BookOpen, Clock, ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types';
import { BlogCover } from './BlogCover';

interface BlogListPageProps {
  onReadPost: (slug: string) => void;
  onBookCall: () => void;
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/90 text-[#1A2E40] text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
    {category}
  </span>
);

/* ── Featured hero card ── */
const FeaturedCard: React.FC<{ post: BlogPost; onRead: () => void }> = ({ post, onRead }) => (
  <article
    onClick={onRead}
    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[440px] sm:min-h-[520px] flex flex-col justify-end"
  >
    {/* Full-bleed image */}
    <BlogCover category={post.category} image={post.coverImage} wide className="absolute inset-0 w-full h-full" />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/70 to-[#0D1B2A]/10" />

    {/* Content */}
    <div className="relative z-10 p-6 sm:p-8 space-y-3">
      <div className="flex items-center gap-3">
        <CategoryBadge category={post.category} />
        <span className="flex items-center gap-1 text-[#D4AF37]/80 text-sm font-semibold uppercase tracking-wider">
          <TrendingUp className="w-3 h-3" />
          Featured
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-snug group-hover:text-[#E5C765] transition-colors duration-300">
        <a
          href={`/blog/${post.slug}`}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onRead(); }}
        >
          {post.title}
        </a>
      </h2>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl line-clamp-2">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-4 text-sm text-white/60">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            {formatDate(post.publishedDate)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            {post.readingTime} min read
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D4AF37] group-hover:text-[#E5C765] transition-colors">
          Read Article
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </div>
  </article>
);

/* ── Smaller grid card with image ── */
const PostCard: React.FC<{ post: BlogPost; onRead: () => void }> = ({ post, onRead }) => (
  <article
    onClick={onRead}
    className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#D4AF37]/40 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
  >
    {/* Cover image */}
    <div className="relative overflow-hidden h-48 sm:h-52 shrink-0">
      <BlogCover category={post.category} image={post.coverImage} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3">
        <CategoryBadge category={post.category} />
      </div>
    </div>

    {/* Text body */}
    <div className="px-5 pt-4 pb-3 flex-1 flex flex-col gap-2.5">
      <h2 className="text-base font-serif font-bold text-[#1A2E40] leading-snug group-hover:text-[#C8A02A] transition-colors line-clamp-2">
        <a
          href={`/blog/${post.slug}`}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onRead(); }}
        >
          {post.title}
        </a>
      </h2>
      <p className="text-sm text-[#57534E] leading-relaxed flex-1 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {post.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-sm font-semibold text-[#1A2E40]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Footer row */}
    <div className="px-5 py-3.5 border-t border-[#E2E8F0] flex items-center justify-between mt-auto">
      <div className="flex items-center gap-3 text-sm text-[#57534E]">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3 text-[#D4AF37]" />
          {formatDate(post.publishedDate)}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#D4AF37]" />
          {post.readingTime} min
        </span>
      </div>
      <span className="flex items-center gap-1 text-sm font-bold text-[#1A2E40] group-hover:text-[#D4AF37] transition-colors">
        Read
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </div>
  </article>
);

export const BlogListPage: React.FC<BlogListPageProps> = ({ onReadPost, onBookCall }) => {
  const sorted = blogPosts
    .slice()
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

  const featured = sorted.find((p) => p.featured) ?? sorted[0];
  const rest = sorted.filter((p) => p.id !== featured?.id);

  return (
    <div className="min-h-screen">
      {/* ── Page hero header ── */}
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            Certified Intuit ProAdvisor · MedSpa, Aesthetic &amp; Wellness Practices
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Practice Finance &amp; Bookkeeping Blog
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light leading-relaxed">
            Practical QuickBooks guidance, revenue reconciliation tips, and financial clarity for MedSpas,
            aesthetic clinics, IV hydration, medical weight-loss, and wellness practices.
          </p>
        </div>
      </div>

      {/* ── Articles ── */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Featured hero */}
          {featured && (
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#8A6A00] mb-4">
                ✦ Featured Article
              </p>
              <FeaturedCard post={featured} onRead={() => onReadPost(featured.slug)} />
            </div>
          )}

          {/* Grid of remaining articles */}
          {rest.length > 0 && (
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#1A2E40]/70 mb-5">
                More Articles
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {rest.map((post) => (
                  <PostCard key={post.id} post={post} onRead={() => onReadPost(post.slug)} />
                ))}
              </div>
            </div>
          )}

          {blogPosts.length === 0 && (
            <p className="text-center text-[#57534E] py-16">Articles coming soon.</p>
          )}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-14 bg-[#1A2E40] text-white border-t border-[#D4AF37]/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
            ✦ Get Expert Eyes On Your Books
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Ready to get your practice books in order?
          </h2>
          <p className="text-sm text-[#E2E8F0] font-light leading-relaxed max-w-xl mx-auto">
            Book a free 20-minute Clarity Call and let's discuss what your
            practice specifically needs — no obligation.
          </p>
          <a href="/contact"
            onClick={(e) => { e.preventDefault(); onBookCall(); }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40]! font-bold text-sm transition-all shadow-[0_4px_14px_rgba(212,175,55,0.3)] border border-[#FFF5DE]/60 cursor-pointer"
          >
            Book Your Free 20-Min Clarity Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
