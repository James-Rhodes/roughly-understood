export interface Post {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    pubDate: string;
    tags: string[];
  };
}

const modules = import.meta.glob<Post>("../pages/posts/*.md*", { eager: true });

/** Every blog post, sorted newest first. */
export function getPosts(): Post[] {
  return Object.values(modules).sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).getTime() -
      new Date(a.frontmatter.pubDate).getTime(),
  );
}
