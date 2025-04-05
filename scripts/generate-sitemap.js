const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { Readable } = require("stream");

const BASE_URL = "https://langat-moimaritim.vercel.app";

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.9 },
  { url: "/projects", changefreq: "monthly", priority: 0.9 },
  { url: "/iot", changefreq: "monthly", priority: 0.9 },
  { url: "/contact", changefreq: "yearly", priority: 0.7 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: BASE_URL });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );
  createWriteStream("./public/sitemap.xml").write(xml);
}

generateSitemap();
