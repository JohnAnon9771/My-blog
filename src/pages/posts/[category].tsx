import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAllPostsPerCategory, getCategories } from '@lib/api.ts';

import LayoutCategorie from '@components/Layouts/Categorie';

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
    <LayoutCategorie>
      <main>
        {posts.map(post => (
          <Link
            href={`${asPath}/${encodeURIComponent(post.data.title)}`}
            key={post.data.title}
          >
            <a>
              <h3>{post.data.title}</h3>
              <p>{post.data.description}</p>
            </a>
          </Link>
        ))}
      </main>
    </LayoutCategorie>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getCategories();
  const paths = categories.map(category => {
    return {
      params: { category },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = getAllPostsPerCategory(params.category);
  return {
    props: { posts: data },
  };
};
