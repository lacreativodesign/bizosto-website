import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Insights for Service Business Leaders | Bizosto",
  description:
    "Practical insights on running service businesses — operations, finance, AI automation, client management, and the systems that make it all work together.",
  alternates: {
    canonical: "https://www.bizosto.com/blog",
  },
};

const categoryColors: Record<string, string> = {
  Operations: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-300",
  Finance: "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300",
  AI: "bg-purple-500/10 text-purple-700 border-purple-500/20 dark:text-purple-300",
  "Client Experience": "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300",
  Security: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300",
  Pricing: "bg-slate-500/10 text-slate-700 border-slate-500/20 dark:text-slate-300",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sorted;

  return (
    <PageShell>
      <div className="flex flex-col">
        <Section variant="premium">
          <Container>
            <SectionHeading
              as="h1"
              eyebrow="The Bizosto Blog"
              title="Insights for service business leaders."
              subtitle="Practical thinking on operations, finance, AI automation, client management, and the systems that make service businesses run."
            />
          </Container>
        </Section>

        <Container className="section-spacing">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="article-card card-hover group mb-8 block rounded-2xl border border-border p-8 transition hover:border-primary/40"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                  categoryColors[featured.category] ?? "bg-surface-muted text-muted-foreground border-border"
                }`}
              >
                {featured.category}
              </span>
              <span className="text-xs text-muted-foreground">{featured.readTime}</span>
              <span className="text-xs text-muted-foreground">{formatDate(featured.date)}</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition mb-3 sm:text-2xl">
              {featured.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">{featured.excerpt}</p>
            <span className="text-sm font-semibold text-primary">Read article →</span>
          </Link>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="article-card card-hover group flex flex-col rounded-xl border border-border p-6 transition hover:border-primary/40"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${
                      categoryColors[post.category] ?? "bg-surface-muted text-muted-foreground border-border"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition mb-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                  <span className="text-xs font-semibold text-primary">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </PageShell>
  );
}
