export const getProjects = async () => {
  const projects = [
    {
      id: 1,
      title: "prismabuilder.io",
      description:
        "Build your Prisma schema visually in this easy-to-use web based tool.",
      href: "https://prismabuilder.io",
      lastCommit: "2025-09-16",
    },
    {
      id: 2,
      title: "react-cmdk",
      description:
        "A package with components making it easier for you to build your user's dream command palette.",
      href: "https://react-cmdk.com",
      lastCommit: "2024-01-29",
    },
    {
      id: 3,
      title: "quick.nvim",
      description:
        "A very fast Lua based Neovim configuration that uses native LSP for intellisense.",
      href: "https://github.com/albingroen/quick.nvim",
      lastCommit: "2025-11-17",
    },
    {
      id: 4,
      title: "notary",
      description:
        "A fast, desktop-first & Vim-friendly Markdown editor.",
      href: "https://github.com/albingroen/notary",
      lastCommit: "2023-06-13",
    },
    {
      id: 5,
      title: "bostadskollen",
      description:
        "Ta reda på vad en bostadsrätt egentligen skulle kosta dig varje månad.",
      href: "https://github.com/albingroen/bostadskollen",
      lastCommit: "2025-02-15",
    },
    {
      id: 6,
      title: "anvil",
      description:
        "A set of tools you can use to bootstrap a fast, stable, and future-proof web application.",
      href: "https://github.com/albingroen/anvil",
      lastCommit: "2022-01-01",
    },
    {
      id: 7,
      title: "thing",
      description:
        "An open source implementation of Spotify Car Thing.",
      href: "https://github.com/albingroen/thing",
      lastCommit: "2021-11-19",
    },
    {
      id: 8,
      title: "unique-pairs",
      description:
        "Given an array of strings, return an object where each field/value is unique.",
      href: "https://github.com/albingroen/unique-pairs",
      lastCommit: "2021-10-14",
    },
    {
      id: 9,
      title: "utilcomps",
      description:
        "Utilitarian component library written in Svelte, for Svelte.",
      href: "https://github.com/albingroen/utilcomps",
      lastCommit: "2021-10-07",
    },
    {
      id: 10,
      title: "render-my-markdown",
      description:
        "Render any markdown through a simple URL.",
      href: "https://github.com/albingroen/render-my-markdown",
      lastCommit: "2021-09-04",
    },
    {
      id: 11,
      title: "gh-status-updater",
      description:
        "A simple command you can use to update your GitHub profile status.",
      href: "https://github.com/albingroen/gh-status-updater",
      lastCommit: "2021-05-25",
    },
    {
      id: 12,
      title: "amethyst-conf",
      description:
        "A Node.js package and CLI for programmatically updating your Amethyst configuration.",
      href: "https://github.com/albingroen/amethyst-conf",
      lastCommit: "2021-03-06",
    },
  ];

  return projects.toSorted(
    (a, b) => new Date(b.lastCommit).getTime() - new Date(a.lastCommit).getTime()
  );
};
