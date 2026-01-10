import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { v2 as cloudinary } from "cloudinary";
import {
  ArrowLeft,
  RotateCcwIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";

const getImages = createServerFn()
  .inputValidator((data: { category: string }) => data)
  .handler(async ({ data }) => {
    cloudinary.config({
      secure: true,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      cloud_name: process.env.CLOUDINARY_NAME,
    });

    return cloudinary.api
      .resources({
        prefix: `Inspiration/${data.category}`,
        type: "upload",
        max_results: 100,
      })
      .then((res) => res.resources) as Promise<
      Array<{ secure_url: string; width: number; height: number }>
    >;
  });

export const Route = createFileRoute("/inspiration/$category")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const images = await getImages({ data: { category: params.category } });
    return { images };
  },
  head: ({ params }) => {
    const siteUrl = `https://abgn.me/inspiration/${params.category}`;
    const title = `${params.category} inspiration | abgn.me`;
    const description = `This is my collection of ${params.category.toLowerCase()} inspiration that I've collected throughout the years. I try to update this when I find new things that speak to me.`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: siteUrl },
        { property: "og:site_name", content: "abgn.me" },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: siteUrl }],
    };
  },
});

const DEFAULT_ZOOM = 400;

function RouteComponent() {
  const { images } = Route.useLoaderData();
  const { category } = Route.useParams();

  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);

  return (
    <div className="text-white min-h-screen grid py-20 px-6 lg:p-20 gap-8 lg:grid-cols-12">
      <div className="space-y-6 lg:sticky lg:top-20 lg:self-start lg:col-span-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <div className="space-y-3.5">
          <h1 className="text-3xl leading-tight">{category} inspiration</h1>

          <div className="space-y-5">
            <p className="text-gray-400 text-balance leading-relaxed">
              This is my collection of {category.toLowerCase()} inspiration that
              I've collected throughout the years. I try to update this when I
              find new things that speak to me.
            </p>

            <p className="text-gray-400 text-balance leading-relaxed">
              Usually when I come here, I'm in need of new ideas. You're more
              than welcome to do so as well!
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 flex flex-col space-y-5">
        <div className="flex items-center gap-2 lg:gap-1.5 lg:self-end">
          {zoom !== DEFAULT_ZOOM && (
            <button
              title="Reset zoom"
              type="button"
              onClick={() => {
                setZoom(DEFAULT_ZOOM);
              }}
            >
              <RotateCcwIcon className="size-5 lg:size-4 text-gray-500" />
            </button>
          )}
          <button
            title="Zoom out"
            type="button"
            onClick={() => {
              setZoom((prev) => prev - 100);
            }}
          >
            <ZoomOutIcon className="size-5 lg:size-4 text-gray-500" />
          </button>
          <button
            title="Zoom in"
            onClick={() => {
              setZoom((prev) => prev + 100);
            }}
          >
            <ZoomInIcon
              className={`size-5 lg:size-4 text-gray-500 ${zoom === DEFAULT_ZOOM ? "opacity-50 sm:opacity-100" : ""}`}
            />
          </button>
        </div>

        <div
          key={category}
          style={{ columns: `${zoom}px` }}
          className="fade-in -mx-3 sm:mx-0"
        >
          {images.map((image) => (
            <Zoom key={image.secure_url}>
              <img
                style={{ aspectRatio: image.width / image.height }}
                className="mb-4 w-full"
                src={image.secure_url}
                decoding="async"
                loading="lazy"
              />
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
}
