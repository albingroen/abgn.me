import { createFileRoute, Link } from "@tanstack/react-router";
import { getPosts } from "@/data/posts";
import { getProjects } from "@/data/projects";
import { format } from "date-fns";

export const Route = createFileRoute("/")({
  component: App,

  loader: async () => {
    const posts = await getPosts();
    const projects = await getProjects();
    return { posts, projects };
  },

  head: () => {
    const siteUrl = "https://abgn.me";
    const title = "Albin Groen | abgn.me";
    const description =
      "Web and app developer with 8+ years of React/React-Native and TypeScript experience. Design enthusiast, speaker, and Open Source maintainer.";

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

function App() {
  const { posts, projects } = Route.useLoaderData();

  return (
    <div className="text-white min-h-screen grid lg:grid-cols-2 xl:grid-cols-3 py-20 px-6 lg:p-20 gap-8 lg:gap-18">
      <div className="flex flex-col gap-6 lg:sticky lg:top-20 lg:self-start">
        <img src="/profile.png" alt="Profile" className="size-18" />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">Hej, I'm Albin</h1>
          <p className="text-gray-400 text-balance leading-relaxed">
            I'm a web and app developer with 8+ years of React/React-Native and
            TypeScript experience. Design enthusiast, speaker, and Open Source
            maintainer.
          </p>
        </div>

        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            <Link
              to="/uses"
              className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4"
            >
              /uses
            </Link>
          </li>
          <li>
            <a
              href="https://x.com/albingroen"
              target="_blank"
              className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4"
            >
              X
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/abgn.me"
              target="_blank"
              className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4"
            >
              Bluesky
            </a>
          </li>
          <li>
            <a
              href="https://mastodon.social/@abgn"
              target="_blank"
              className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4"
            >
              Mastodon
            </a>
          </li>
          <li>
            <a
              href="https://github.com/albingroen"
              target="_blank"
              className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.twitch.tv/groenalbin"
              target="_blank"
              className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4"
            >
              Twitch
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@albingroen"
              target="_blank"
              className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <div className="size-18 hidden lg:block" />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Posts</h2>

          <ul className="flex flex-col gap-8">
            {posts.map((post) => (
              <li key={post._meta.path}>
                <Link
                  to="/posts/$slug"
                  params={{ slug: post.slug }}
                  className="flex flex-col gap-4 lg:p-3 lg:-m-3 lg:hover:bg-gray-800 group"
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-xl underline decoration-gray-700 underline-offset-8 text-balance leading-relaxed">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm text-balance">
                      {post.excerpt}
                    </p>

                    <time className="text-gray-500 text-sm">
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="size-18 hidden lg:block" />
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Projects</h2>
          <ul className="flex flex-col gap-5">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.href}
                  target="_blank"
                  className="flex flex-col gap-1.5 lg:py-2 lg:px-3 lg:-my-2 lg:-mx-3 lg:hover:bg-gray-800"
                >
                  <h3 className="text-lg underline decoration-gray-700 underline-offset-8 text-balance">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm text-balance">
                    {project.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
