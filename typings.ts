export type Post = {
  _id: string;
  _createdAt: string;
  slug: {
    current: string;
  };
  title: string;
  subtitle: string;
  snippet: string;
  name: string;
  name2?: string;
  author: {
    _ref: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  category: string;
  categories: [object];
  body: [object];
}
