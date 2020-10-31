import { Post } from "./Post";

export const retrieve = async (id: string) => {
  try {
    const data = await import(`./posts/${id}.ts`);
    if (!data) return null;
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const postIds: string[] = [
  "syntax-highlighting-demo",
  "hello-world-css",
  "hello-world-html",
  "hello-world-js",
];

export const postCollection: Promise<Post>[] = postIds.map(
  async (id: string) => await import(`./posts/${id}.ts`)
);
