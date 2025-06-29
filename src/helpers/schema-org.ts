import envConfig from "@/common/env-config";
import { TCMSMedia } from "@/types/cms/common";
import { TCMSPage } from "@/types/cms/page";
import { CMSProductPricingTypeEnum, TCMSProduct } from "@/types/cms/product";
import { TCMSProfile } from "@/types/cms/profile";
import { TCMSStackItem } from "@/types/cms/stack";
import { TCMSWork } from "@/types/cms/work";
import { THNPost } from "@/types/hashnode/post.type";
import {
  AboutPage,
  Article,
  BreadcrumbList,
  ContactPage,
  Organization,
  Person,
  Product,
  ProfilePage,
  Service,
  SoftwareApplication,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

const generateId = {
  website: () => `${envConfig.BASE_URL}#website`,
  person: () => `${envConfig.BASE_URL}#person`,
  image: (path: string) => `${envConfig.BASE_URL}${path}#image`,
  org: (name: string) => `${envConfig.BASE_URL}/works#org-${name}`,
};

const generateImageObject = (
  image: TCMSMedia | undefined,
  name: string = ""
) => {
  if (!image) return undefined;

  return {
    "@type": "ImageObject" as const,
    "@id": generateId.image(new URL(image.url).pathname),
    url: image.url,
    width: `${image.width}px`,
    height: `${image.height}px`,
    name: image?.alt || name,
  };
};

// ----------------------------------------------------------------------

export const generateWebSiteSchema = (
  profile: TCMSProfile,
  page: TCMSPage
): WithContext<WebSite> => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": generateId.website(),
    name: profile.name,
    alternateName: profile.name,
    url: envConfig.BASE_URL,
    description: page.description,
    author: {
      "@id": generateId.person(),
    },
    publisher: {
      "@id": generateId.person(),
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${envConfig.BASE_URL}?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    } as any,
    dateCreated: profile.createdAt,
    dateModified: profile.updatedAt,
  };
};

// ----------------------------------------------------------------------

export const generatePersonSchema = (
  profile: TCMSProfile,
  page: TCMSPage
): WithContext<Person> => {
  const socialUrls = profile.socials.map((social) => social.href);
  const contactEmail = profile.contacts
    .find((contact) => contact.href.startsWith("mailto:"))
    ?.href.replace("mailto:", "");
  const contactPhone = profile.contacts
    .find((contact) => contact.href.startsWith("tel:"))
    ?.href.replace("tel:", "");

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": generateId.person(),
    name: profile.name,
    image: generateImageObject(profile.avatar, profile.name),
    url: envConfig.BASE_URL,
    mainEntityOfPage: generateId.website(),
    email: contactEmail,
    telephone: contactPhone,
    sameAs: socialUrls,
    knowsAbout: profile.stackItems.map((stack) => stack.title),
    description: page.description,
    jobTitle: "Web App Developer",
    nationality: "Bangladesh",
    gender: "Male",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },
    owns: {
      "@id": generateId.website(),
    },
  };
};

// ----------------------------------------------------------------------

export const generateWebPageSchema = (page: TCMSPage): WithContext<WebPage> => {
  const pageUrl = `${envConfig.BASE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: pageUrl,
    isPartOf: {
      "@id": generateId.website(),
    },
    author: {
      "@id": generateId.person(),
    },
    publisher: {
      "@id": generateId.person(),
    },
    image: generateImageObject(page.metaSeo?.image, page.title),
    datePublished: page.createdAt,
    dateModified: page.updatedAt,
    inLanguage: "en-US",
    mainEntity: {
      "@id": generateId.person(),
    },
  };
};

// ----------------------------------------------------------------------

export const generateAboutPageSchema = (
  page: TCMSPage
): WithContext<AboutPage> => {
  const pageUrl = `${envConfig.BASE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: page.title,
    description: page.description,
    url: pageUrl,
    isPartOf: {
      "@id": generateId.website(),
    },
    author: {
      "@id": generateId.person(),
    },
    publisher: {
      "@id": generateId.person(),
    },
    mainEntity: {
      "@id": generateId.person(),
    },
    about: {
      "@id": generateId.person(),
    },
    image: generateImageObject(page.metaSeo?.image, page.title),
    datePublished: page.createdAt,
    dateModified: page.updatedAt,
  };
};

// ----------------------------------------------------------------------

export const generateContactPageSchema = (
  page: TCMSPage
): WithContext<ContactPage> => {
  const pageUrl = `${envConfig.BASE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: page.title,
    description: page.description,
    url: pageUrl,
    isPartOf: {
      "@id": generateId.website(),
    },
    author: {
      "@id": generateId.person(),
    },
    publisher: {
      "@id": generateId.person(),
    },
    mainEntity: {
      "@id": generateId.person(),
    },
    about: {
      "@id": generateId.person(),
    },
    image: generateImageObject(page.metaSeo?.image, page.title),
    datePublished: page.createdAt,
    dateModified: page.updatedAt,
  };
};

// ----------------------------------------------------------------------

export const generateOrganizationSchema = (
  work: TCMSWork
): WithContext<Organization> => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": generateId.org(work.company),
    name: work.company,
    url: work.companyUrl,
    employee: {
      "@id": generateId.person(),
      jobTitle: work.position,
    },
    alumni: work.endYear
      ? {
          "@id": generateId.person(),
        }
      : undefined,
  };
};

// ----------------------------------------------------------------------

export const generateSoftwareApplicationSchema = (
  product: TCMSProduct
): WithContext<SoftwareApplication> => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    description: product.description,
    url: product.liveLink,
    applicationCategory: "UtilitiesApplication",
    image: generateImageObject(product.logo, product.title),
    author: {
      "@id": generateId.person(),
    },
    creator: {
      "@id": generateId.person(),
    },
    publisher: {
      "@id": generateId.person(),
    },
    offers: {
      "@type": "Offer",
      price:
        product.pricingType === CMSProductPricingTypeEnum.OPEN_SOURCE
          ? "0"
          : undefined,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": generateId.person(),
      },
    },
    license:
      product.pricingType === CMSProductPricingTypeEnum.OPEN_SOURCE
        ? "https://opensource.org/licenses/MIT"
        : undefined,
    isAccessibleForFree:
      product.pricingType === CMSProductPricingTypeEnum.OPEN_SOURCE,
    downloadUrl: product.sourceLink,
    installUrl: product.liveLink,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
      bestRating: "5",
      ratingCount: "1",
    },
  };
};

// ----------------------------------------------------------------------

export const generateProductSchema = (
  product: TCMSProduct
): WithContext<Product> => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    url: product.liveLink,
    image: generateImageObject(product.logo, product.title),
    brand: {
      "@type": "Brand",
      name: product.title,
    },
    manufacturer: {
      "@id": generateId.person(),
    },
    offers: {
      "@type": "Offer",
      price:
        product.pricingType === CMSProductPricingTypeEnum.OPEN_SOURCE
          ? "0"
          : undefined,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": generateId.person(),
      },
    },
    category: "Software",
    audience: {
      "@type": "Audience",
      audienceType: "Professional",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Pricing Type",
        value: product.pricingType,
      },
      {
        "@type": "PropertyValue",
        name: "Source Code",
        value: product.sourceLink ? "Available" : "Not Available",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
      bestRating: "5",
      ratingCount: "1",
    },
  };
};

// ----------------------------------------------------------------------

export const generateProfilePageSchema = (
  profile: TCMSProfile,
  page: TCMSPage
): WithContext<ProfilePage> => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: page.title,
    description: page.description,
    url: envConfig.BASE_URL,
    isPartOf: {
      "@id": generateId.website(),
    },
    author: {
      "@id": generateId.person(),
    },
    publisher: {
      "@id": generateId.person(),
    },
    mainEntity: {
      "@id": generateId.person(),
    },
    about: {
      "@id": generateId.person(),
    },
    image: generateImageObject(
      page.metaSeo?.image || profile.avatar,
      page.title
    ),
    datePublished: page.createdAt,
    dateModified: page.updatedAt,
  };
};

// ----------------------------------------------------------------------

export const generateArticleSchema = (post: THNPost): WithContext<Article> => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    name: post.title,
    headline: post.title,
    description: post.brief,
    url: post.url,
    author: {
      "@id": generateId.person(),
    },
    publisher: {
      "@id": generateId.person(),
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    isPartOf: {
      "@id": generateId.website(),
    },
  };
};

// ----------------------------------------------------------------------

export const generateServiceSchema = (
  stackItem: TCMSStackItem
): WithContext<Service> => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: stackItem.title,
    description: stackItem.description,
    image: generateImageObject(stackItem.logo, stackItem.title),
    provider: {
      "@id": generateId.person(),
    },
    serviceType: "Technology Consulting",
    category: "Software Development",
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: "Business",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@id": generateId.person(),
      },
    },
    isRelatedTo: {
      "@id": generateId.person(),
    },
  };
};

// ----------------------------------------------------------------------

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (
  breadcrumbs: BreadcrumbItem[]
): WithContext<BreadcrumbList> => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: {
        "@type": "WebPage",
        "@id": `${crumb.url}#page`,
        url: crumb.url,
      },
    })),
  };
};

// ----------------------------------------------------------------------

export const generatePageBreadcrumb = (
  pageTitle: string,
  pageSlug: string
): WithContext<BreadcrumbList> => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Home",
      url: envConfig.BASE_URL,
    },
    {
      name: pageTitle,
      url: `${envConfig.BASE_URL}/${pageSlug}`,
    },
  ];

  return generateBreadcrumbSchema(breadcrumbs);
};
