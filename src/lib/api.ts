import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import constantsPlanet from '../constants/planets';

const postsDirectory = join(process.cwd(), 'src/pages/posts');

interface Data {
  data: {
    [key: string]: string;
  };
  content: string;
}

export function getAllPostsPerCategory(categorie: string | string[]): Data[] {
  const categoriePath = join(postsDirectory, categorie as string);

  const posts = fs.readdirSync(categoriePath).map(post => {
    const fullPath = join(postsDirectory, `${categorie}/${post}`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const { data, content } = matter(fileContents);

    return { data, content };
  });

  return posts;
}

export function getCategories(): string[] {
  const paths: string[] = [];
  fs.readdirSync(postsDirectory).forEach(folder => {
    const validPaths = /^[^.]+$|\.(?!(tsx)$)([^.]+$)/;
    if (validPaths.test(folder)) {
      paths.push(folder);
    }
  });
  return paths;
}

export function getAllPosts(): unknown[] {
  const data = constantsPlanet.map(planet => {
    let dataPosts: { [key: string]: string };
    const categoriePath = join(postsDirectory, planet.categorie);

    fs.readdirSync(categoriePath).forEach(post => {
      const fullPath = join(categoriePath, `/${post}`);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');

      const { data } = matter(fileContents);

      dataPosts = data;
    });

    return dataPosts;
  });

  return data;
}
