import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getAllPosts } from '@lib/api';

export default function Post(): JSX.Element {
  return (
    <div>
      <p>test</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = getAllPosts();
  const paths = data.map(post => {
    return {
      params: { post: post?.title || '' },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const props = { name: 'nothing' };
  return {
    props,
  };
};
