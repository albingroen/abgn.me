import Head from "next/head";

interface SeoProps {
  canonicalUrl?: string;
  description?: string;
  title?: string;
  image?: string;
  url?: string;
}

const Seo = ({
  description = "Using code and design to craft beautiful & accessible digital solutions. I currently lead frontend development at Demando.",
  image = "https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto/v1676387662/office_dwkd8z.jpg",
  title = "Hej, I'm Albin",
  url = "https://abgn.me",
  canonicalUrl,
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
