import Head from "next/head";

interface SeoProps {
  canonicalUrl?: string;
  description?: string;
  title?: string;
  image?: string;
  url?: string;
}

const Seo = ({
  description = "I love building things from the ground up. There's just something so calming and fulfilling in combining creativity with building. I'm currently leading frontend development at Demando , where we're building a new way to navigate your way through your career.",
  image = "https://res.cloudinary.com/albin-groen/image/upload/w_1000/v1658324932/abgn-seo_aa83lu.png",
  title = "Albin Groen - Builder and Designer",
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
