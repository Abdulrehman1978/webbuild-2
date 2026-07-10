import { notFound } from "next/navigation";
import Link from "next/link";
import { generateMetadata as buildMetadata } from "@/lib/seo";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { CalendarDays, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Generate metadata per blog post
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadTime(body: string) {
  const wordCount = body.replace(/<[^>]*>/g, "").split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate ?? post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://webbuild-2.vercel.app/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Taxzone",
      url: "https://webbuild-2.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://webbuild-2.vercel.app/og-image.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://webbuild-2.vercel.app/blog/${post.slug}`,
    },
  };

  return (
    <div className="w-full">
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* HERO */}
      <section className="bg-obsidian pt-32 pb-12 px-6 md:px-8 w-full relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.04),transparent_60%)] -z-10" />
        <div className="absolute inset-0 grid-mesh opacity-10 -z-20" />

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-silver/60 flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-champagne transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-champagne truncate max-w-[200px]">{post.title}</span>
          </nav>

          <h1 className="font-display-brand text-3xl sm:text-4xl md:text-5xl font-extrabold text-ice-white leading-tight">
            {post.title}
          </h1>

          <p className="text-silver text-sm md:text-base leading-relaxed">
            {post.description}
          </p>

          {/* Meta row — visible dates for GEO freshness signal */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-silver/70 border-t border-white/5 pt-4">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-emerald-active" />
              <span className="font-semibold text-silver">{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-emerald-active" />
              <span>
                Published:{" "}
                <time dateTime={post.publishedDate}>
                  {formatDate(post.publishedDate)}
                </time>
              </span>
            </span>
            {post.updatedDate && post.updatedDate !== post.publishedDate && (
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-champagne" />
                <span>
                  Updated:{" "}
                  <time dateTime={post.updatedDate}>
                    {formatDate(post.updatedDate)}
                  </time>
                </span>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-active" />
              <span>{estimateReadTime(post.body)} min read</span>
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-obsidian py-16 px-6 md:px-8 w-full">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose-taxzone"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* CTA */}
          <div className="mt-16 bg-slate-dark/30 border border-white/5 rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-active/5 rounded-full filter blur-2xl -z-10" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">
              GET EXPERT HELP
            </span>
            <h3 className="font-display-brand text-xl font-bold text-ice-white">
              Questions about your specific situation?
            </h3>
            <p className="text-xs text-silver leading-relaxed">
              Taxzone&apos;s team of 22+ year practitioners is available for direct consultations in Navi Mumbai. We handle GST, income tax, company registration, and accounting for SMEs across Maharashtra.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="bg-emerald-active hover:bg-emerald-glow text-obsidian font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg shadow-emerald-active/10 text-center"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/resources"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-ice-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Resources
              </Link>
            </div>
          </div>

          {/* More posts */}
          <div className="mt-12 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-active">
              MORE GUIDES
            </h4>
            <div className="flex flex-col gap-3">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex items-center justify-between bg-slate-dark/20 border border-white/5 hover:border-white/10 rounded-xl px-5 py-4 transition-all duration-200"
                  >
                    <span className="text-sm font-semibold text-ice-white group-hover:text-champagne transition-colors pr-4 leading-snug">
                      {p.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-silver/50 group-hover:text-emerald-active shrink-0 transition-colors" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
