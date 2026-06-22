import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "../posts";
import InsightsPostClient from "./InsightsPostClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Lamb Insurance Agency`,
    description: post.metaDescription ?? post.excerpt,
    alternates: {
      canonical: `https://lambinsuranceagency.com/insights/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://lambinsuranceagency.com/insights/${post.slug}`,
      siteName: "Lamb Insurance Agency",
      title: `${post.title} | Lamb Insurance Agency`,
      description: post.metaDescription ?? post.excerpt,
      publishedTime: post.date,
      images: post.thumbnail
        ? [{ url: post.thumbnail, width: 1200, height: 630, alt: post.title }]
        : [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Lamb Insurance Agency`,
      description: post.excerpt,
    },
    robots: { index: true, follow: true },
  };
}

export default async function InsightsPostRoute({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const graphItems: object[] = [
    {
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription ?? post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author ?? "Cody Lamb",
        ...(post.authorTitle ? { jobTitle: post.authorTitle } : {}),
      },
      publisher: {
        "@type": "Organization",
        name: "Lamb Insurance Agency",
        url: "https://lambinsuranceagency.com",
      },
      ...(post.thumbnail ? { image: post.thumbnail } : {}),
      url: `https://lambinsuranceagency.com/insights/${post.slug}`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://lambinsuranceagency.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights",
          item: "https://lambinsuranceagency.com/insights",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `https://lambinsuranceagency.com/insights/${post.slug}`,
        },
      ],
    },
  ];

  if (post.faqItems && post.faqItems.length > 0) {
    graphItems.push({
      "@type": "FAQPage",
      mainEntity: post.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graphItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <InsightsPostClient post={post} />
    </>
  );
}
