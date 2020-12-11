import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import { capitalize } from '@lib/capitalize';
import { DataFetch, Posts } from 'types/pages/categories';

import Layout from '@components/Layouts/Categorie';

export default function Posts({ posts }: Posts): JSX.Element {
  const { query } = useRouter();
  return (
    <Layout title={capitalize(query.planet)}>
      {posts.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: DataFetch[] = await (
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
  const data: DataFetch[] = await (
    await fetch(
      `https://johnanon-blog-cms.herokuapp.com/categories?_where[name]=${context.params.planet}`,
    )
  ).json();
  const { posts } = data[0];

  return {
    props: { posts },
  };
};
