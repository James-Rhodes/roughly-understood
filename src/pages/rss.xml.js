import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Roughly Understood",
    description: `My name is James and I am writing a blog where I can show the process I go through, from not understanding something, to having a rough understanding. The hopes is that writing it down not only helps me to remember it better but also will allow you, my dear reader, to be able to look at a topic and say \"Yeah, I think that is Roughly Understood\".`,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
