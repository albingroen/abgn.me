/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { getImages } from "../lib/images";

function Photos({ images }: { images: string[] }) {
  return (
    <>
      <Seo
        image="https://res.cloudinary.com/albin-groen/image/upload/w_1000/v1658440087/CleanShot_2022-07-21_at_23.47.05_2x_d6oz7k.png"
        description="I really enjoy taking photos. On this page I've just posted a bunch of photos from throughout the years."
        title="Photos | Albin Groen"
      />

      <div className="max-w-screen-md mx-auto py-24 px-8">
        <header>
          <h1 className="text-2xl font-semibold mt-8">Photos</h1>

          <p className="mt-2 text-indigo-500 font-semibold">
            A bunch of photos taken throughout the years
          </p>
        </header>

        <section className="mt-16">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images?.map((image: string) => (
              <a
                className="block h-[300px] w-full rounded-md bg-white p-3 pb-10 shadow shadow-stone-300 border border-stone-200 hover:transform hover:scale-110 transition duration-300"
                rel="noopener noreferrer"
                target="_blank"
                href={image}
                key={image}
              >
                <img
                  className="object-center object-cover h-full w-full rounded-sm"
                  src={image.replaceAll("/upload", "/upload/w_500")}
                />
              </a>
            ))}
          </ul>
        </section>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const images = await getImages();

  return {
    props: {
      images,
    },
  };
}

export default Photos;
