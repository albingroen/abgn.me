import { v2 as cloudinary } from "cloudinary";

export async function getImages() {
  const C_API_SECRET = process.env.CLOUDINARY_API_SECRET;
  const C_API_KEY = process.env.CLOUDINARY_API_KEY;
  const C_NAME = process.env.CLOUDINARY_NAME;

  cloudinary.config({
    api_secret: C_API_SECRET,
    api_key: C_API_KEY,
    cloud_name: C_NAME,
  });

  const result = await cloudinary.api.resources({
    type: "upload",
    prefix: "abgn.me",
    max_results: 200,
  });

  const images = result?.resources
    ? result.resources.map((resource: any) => resource.secure_url)
    : [];

  return images;
}
