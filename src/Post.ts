export type Content = {
  type: string;
  content: string;
};

export type Post = {
  data: {
    link: string;
    title: string;
    author: string;
    content: Content[];
    createdAt: string;
  };
};
