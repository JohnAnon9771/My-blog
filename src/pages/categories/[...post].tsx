import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getAllPosts, getCategories } from '@lib/api';

export default function Post(): JSX.Element {
  return (
    <div>
      <p>test</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { post: ['a', 'b'] } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const props = { name: 'nothing' };
  return {
    props,
  };
};
