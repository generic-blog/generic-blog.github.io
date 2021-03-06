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

const postIds: string[] = ["custom-syntax-highlighting"];

export const postCollection: Promise<Post>[] = postIds.map(
  async (id: string) => await import(`./posts/${id}.ts`)
);
