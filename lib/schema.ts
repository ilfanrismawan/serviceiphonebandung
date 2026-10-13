import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";
import type {
  BlogPost,
  BreadcrumbItem,
  Faq,
  ServiceItem,
} from "@/types";

const { address } = siteConfig;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: siteConfig.name,
    description: `${siteConfig.name} adalah tempat servis iPhone independen di ${address.street}, ${address.district}, ${address.city}.`,
    url: siteConfig.url,
    telephone: `+${siteConfig.contact.whatsapp}`,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    // TODO(owner): confirm coordinates and hours for No.86 before adding them.
    areaServed: { "@type": "City", name: address.city },
    hasMap: address.mapsListingUrl,
    // No aggregateRating/review markup for the business's own reviews.
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
  };
}

export function serviceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title}`,
    serviceType: service.shortTitle,
    description: service.description,
    url: absoluteUrl(`/layanan/${service.slug}`),
    provider: { "@id": absoluteUrl("/#business") },
    areaServed: { "@type": "City", name: address.city },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: siteConfig.language,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": absoluteUrl("/#business") },
  };
}
