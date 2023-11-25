export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Putra Nugraha",
  birthday: "2002, 6, 19",
  username: "detagraha",
  description: "Deta's corner of the internet.",
  url: "https://detagraha.net",
  projects: [
    {
      name: "similarity-ai",
      description:
        "Web app for finding similar documents using NextJS and OpenAI's GPT (WIP).",
      url: "https://github.com/Putnug1122/similarity-ai",
      icon: "/logos/the-armoury-bookshop.png",
    },
    {
      name: "snippetbox",
      description:
        "A minimalistic code snippet sharing platform built with Go and MySQL.",
      url: "https://github.com/Putnug1122/snippetbox",
      icon: "/logos/haddon-institute.png",
    },
    {
      name: "pemira",
      description:
        "A frontend for a voting system built with NextJS and Mantine.",
      url: "https://test-mantine-five.vercel.app/",
      icon: "/logos/star-compass.png",
    },
    {
      name: "rust-pdf-merger",
      description:
        "A PDF merger CLI tool built with Rust and the PDFtk library.",
      url: "https://github.com/Putnug1122/rust-pdf-merger",
      icon: "/logos/stand-firm.webp",
    },
    {
      name: "bevy-ball",
      description:
        "A simple 2D ball game built with Bevy and Rust. This is my first game ever.",
      url: "https://github.com/Putnug1122/bevy-ball-game",
      icon: "/logos/simply-photos.avif",
    },
    {
      name: "blog",
      description: "This site.",
      url: "https://detagraha.net",
      icon: "/logos/sdelta.webp",
    },
  ],
};
