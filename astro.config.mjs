import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://roughly-understood.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    // Astro 7 renders Markdown with Sätteri by default. This site relies on
    // remark/rehype plugins for maths, so opt back into the unified pipeline.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
