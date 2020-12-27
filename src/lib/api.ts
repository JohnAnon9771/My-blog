import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import constantsPlanet from '../constants/planets';

const postsDirectory = join(process.cwd(), 'src/posts');

interface Data {
  data: {
    [key: string]: string;
  };
  content: string;
}

export function getPostsByCategorie(categorie: string | string[]): Data[] {
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
  return fs.readdirSync(postsDirectory).map(folder => folder);
}

export function getAllPosts() {
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

// export function getPostBySlug(slug, fields = []) {
//   const realSlug = slug.replace(/\.mdx$/, '');
//   const fullPath = join(postsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);

//   const items = {};

//   // Ensure only the minimal needed data is exposed
//   fields.forEach(field => {
//     if (field === 'slug') {
//       items[field] = realSlug;
//     }
//     if (field === 'content') {
//       items[field] = content;
//     }

//     if (data[field]) {
//       items[field] = data[field];
//     }
//   });

//   return items;
// }

// export function getAllPosts(fields = []) {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map(slug => getPostBySlug(slug, fields))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
//   return posts;
// }
