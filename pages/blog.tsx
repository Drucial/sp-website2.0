import Layout from "../src/components/Layout";
import groq from "groq";
import client from "../client";
import { Post } from "../typings";
import { PageTitle } from "../src/components/PageTitle";
import { FeaturedPost } from "../src/components/FeaturedPost";
import { PostsGrid } from "../src/components/PostsGrid";
import { Loading } from "../src/components/Loading";

export async function getStaticProps() {
  const posts =
    await client.fetch(groq`*[_type == "post" && publishedAt < now()]{
      ...,
      "name": author->name,
			"name2": coauthor->name,
      "category": categories[0]->title,
    } | order(publishedAt desc)`);
  return {
    props: {
      posts,
    },
  };
}

type Props = {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  const filteredPosts = [...posts];
  const firstPost = filteredPosts.shift();

  if (!posts) return (
    <Layout>
      <Loading />
    </Layout>
  )


  return (
    <Layout>
      <PageTitle title="Blog" subtitle="From the Stashpad team & community"/>
      <FeaturedPost blog={firstPost!}/>
      <PostsGrid blogs={filteredPosts!} />
    </Layout>
  );
}
