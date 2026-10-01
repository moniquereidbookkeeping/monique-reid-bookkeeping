import React from 'react';
import { BookOpen, Clock, ArrowRight, Tag, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types';

interface BlogListPageProps {
  onReadPost: (slug: string) => void;
  onBookCall: () => void;
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const PostCard: React.FC<{ post: BlogPost; onRead: () => void }> = ({ post, onRead }) => (
  <article className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#D4AF37]/50 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
    {/* Category band */}
    <div className="px-6 pt-5 pb-0">
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
        <Tag className="w-3 h-3" />
        {post.category}
      </span>
    </div>

    <div className="px-6 py-4 flex-1 flex flex-col gap-3">
      <h2 className="text-lg font-serif font-bold text-[#1A2E40] leading-snug group-hover:text-[#D4AF37] transition-colors">
        {post.title}
      </h2>
      <p className="text-sm text-[#57534E] leading-relaxed flex-1 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-[#1A2E40]/5 border border-[#1A2E40]/10 text-[10px] font-semibold text-[#1A2E40]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Footer row */}
    <div className="px-6 py-4 border-t border-[#E2E8F0] flex items-center justify-between">
      <div className="flex items-center gap-3 text-xs text-[#57534E]">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          {formatDate(post.publishedDate)}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
          {post.readingTime} min read
        </span>
      </div>
      <button
        onClick={onRead}
        className="flex items-center gap-1.5 text-xs font-bold text-[#1A2E40] hover:text-[#D4AF37] transition-colors group/btn cursor-pointer"
      >
        Read Article
        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
      </button>
    </div>
  </article>
);

export const BlogListPage: React.FC<BlogListPageProps> = ({ onReadPost, onBookCall }) => {
  return (
    <div>
      {/* Page header */}
      <div className="bg-[#1A2E40] text-white py-14 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
            <BookOpen className="w-3.5 h-3.5" />
            MedSpa Bookkeeping Insights
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Practice Finance &amp; Bookkeeping Blog
          </h1>
          <p className="text-sm sm:text-base text-[#E2E8F0] max-w-2xl mx-auto font-light leading-relaxed">
            Practical QuickBooks guidance, revenue reconciliation tips, and financial clarity for MedSpas,
            aesthetic clinics, and wellness practices.
          </p>
        </div>
      </div>

      {/* Article grid */}
      <section className="py-14 bg-gradient-to-b from-[#F8FAFC] to-[#FDFCFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <p className="text-center text-[#57534E] py-16">Articles coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .slice()
                .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
                .map((post) => (
                  <PostCard key={post.id} post={post} onRead={() => onReadPost(post.slug)} />
                ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-[#1A2E40] text-white border-t border-[#D4AF37]/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Ready to get your books in order?
          </h2>
          <p className="text-sm text-[#E2E8F0] font-light leading-relaxed">
            Book a complimentary 20-minute Financial Clarity Call and let's talk about what your practice
            specifically needs.
          </p>
          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C765] to-[#D4AF37] hover:from-[#C8A02A] hover:via-[#D4AF37] hover:to-[#C8A02A] text-[#1A2E40] font-bold text-sm transition-all shadow-[0_4px_14px_rgba(212,175,55,0.3)] border border-[#FFF5DE]/60 cursor-pointer"
          >
            Book Your Free 20-Min Clarity Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
