import envConfig from "@/common/env-config";
import { TCMSPage } from "@/types/cms/page";
import { TCMSProfile } from "@/types/cms/profile";
import { ImageObject, Person, WebPage, WebSite, WithContext } from "schema-dts";

const generateId = {
  website: () => `${envConfig.BASE_URL}#website`,
  person: () => `${envConfig.BASE_URL}#person`,
  image: (path: string) => `${envConfig.BASE_URL}${path}#image`,
  org: (name: string) => `${envConfig.BASE_URL}#org-${name}`,
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

  const image: ImageObject = {
    "@type": "ImageObject",
    "@id": generateId.image(new URL(profile.avatar.url).pathname),
    url: profile.avatar.url,
    width: `${profile.avatar.width}px`,
    height: `${profile.avatar.height}px`,
    name: profile.name,
  };

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": generateId.person(),
    name: profile.name,
    image,
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

  const image = page.metaSeo?.image
    ? {
        "@type": "ImageObject" as const,
        "@id": generateId.image(new URL(page.metaSeo.image.url).pathname),
        url: page.metaSeo.image.url,
        width: `${page.metaSeo.image.width}px`,
        height: `${page.metaSeo.image.height}px`,
        name: page.metaSeo.image.alt,
      }
    : undefined;

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
    image,
    datePublished: page.createdAt,
    dateModified: page.updatedAt,
    inLanguage: "en-US",
    mainEntity: {
      "@id": generateId.person(),
    },
  };
};

// ----------------------------------------------------------------------
