const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://couturehouse.co/#organization",
  name: "Couture House Co.",
  url: "https://couturehouse.co/",
  logo: "https://couturehouse.co/brand/favicon-logo.png",
  email: "hello@couturehouse.co",
  sameAs: ["https://www.instagram.com/couturehouse.co/"],
  description: "A digital studio creating websites, booking experiences, e-commerce, automation and content for Black-owned salons, stylists and hair-care brands.",
  knowsAbout: [
    "Salon website design",
    "Hair stylist website design",
    "Booking experience design",
    "Shopify e-commerce",
    "Business automation",
    "Hair and beauty content creation",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://couturehouse.co/#website",
  url: "https://couturehouse.co/",
  name: "Couture House Co.",
  publisher: { "@id": "https://couturehouse.co/#organization" },
  inLanguage: "en-US",
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([organization, website]).replace(/</g, "\\u003c") }}
    />
  );
}
