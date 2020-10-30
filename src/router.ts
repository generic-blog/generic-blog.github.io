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

export const dynamicSort = (property: string, reversed?: boolean) => (
  a: any,
  b: any
) =>
  (a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0) *
  (reversed ? -1 : 1);

const postIds: string[] = ["hello-world"];

export const postCollection: Promise<Post>[] = postIds.map(
  async (id: string) => await import(`./posts/${id}.ts`)
);
