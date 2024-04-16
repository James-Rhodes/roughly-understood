import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Roughly Understood",
    description: `Roughly Understood is a blog containing articles where we all try to roughly understand topics from programming, physics, maths and more.`,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md*")),
    customData: `<language>en-us</language>`,
  });
}
