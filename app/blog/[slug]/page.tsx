import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import PageShell from "@/components/PageShell";
import { getPost, getAllSlugs, type BlogSection } from "@/lib/blog-posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bizosto Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://www.bizosto.com/blog/${post.slug}` },
  };
}

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="mt-8 mb-3 text-xl font-semibold text-foreground leading-snug">
          {section.content}
        </h2>
      );
    case "p":
      return (
        <p className="mb-4 text-base text-muted-foreground leading-relaxed">
          {section.content}
        </p>
      );
    case "ul":
      return (
        <ul className="mb-4 space-y-2 pl-4">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base text-muted-foreground">
              <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote className="my-6 rounded-xl border-l-4 border-primary bg-surface px-6 py-4">
          <p className="text-base font-medium text-foreground leading-relaxed italic">
            &ldquo;{section.content}&rdquo;
          </p>
        </blockquote>
      );
    default:
      return null;
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <PageShell>
      <Container className="section-spacing">
        <div className="mx-auto max-w-2xl">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground mb-8"
          >
            ← Back to Blog
          </Link>

          {/* Header */}
          <div className="space-y-4 mb-8 pb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
              <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
            </div>
            <h1 className="text-2xl font-semibold text-foreground leading-snug sm:text-3xl">
              {post.title}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Content */}
          <article>
            {post.sections.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}
          </article>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center space-y-4">
            <p className="text-lg font-semibold text-foreground">
              Ready to run your service business from one system?
            </p>
            <p className="text-sm text-muted-foreground">
              14-day free trial. Every module unlocked. No credit card required.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://app.bizosto.com/signup"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Start Free Trial →
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface-muted"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
