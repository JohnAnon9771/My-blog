import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '@components/Layouts/Categorie';

interface Props {
  posts: {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    category: number;
    likes: number;
  }[];
}

export default function PostsPerPlanet({ posts }: Props): JSX.Element {
  return (
    <Layout>
      {posts.map(post => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (
    await fetch('https://johnanon-blog-cms.herokuapp.com/categories')
  ).json();
  const paths = data.map(category => {
    return {
      params: { planet: category.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const data = await (
    await fetch(
      `https://johnanon-blog-cms.herokuapp.com/categories?_where[name]=${context.params.planet}`,
    )
  ).json();
  const { posts } = data[0];

  return {
    props: { posts },
  };
};
