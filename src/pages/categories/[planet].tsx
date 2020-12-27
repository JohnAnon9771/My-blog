import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getCategories, getPostsByCategorie } from '@lib/api';

import Layout from '@components/Layouts/Categorie';

interface Props {
  posts: {
    data: {
      title: string;
      description: string;
    };
    content: string;
  }[];
}

export default function Posts({ posts }: Props): JSX.Element {
  const { asPath } = useRouter();
  return (
    <Layout>
      <main>
        {posts.map(post => (
          <Link
            href={`${asPath}/posts/${post.data.title}`}
            key={post.data.title}
          >
            <a>
              <h3>{post.data.title}</h3>
              <p>{post.data.description}</p>
            </a>
          </Link>
        ))}
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getCategories();
  const paths = categories.map(category => {
    return {
      params: { planet: category },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const data = getPostsByCategorie(context.params.planet);
  return {
    props: { posts: data },
  };
};
