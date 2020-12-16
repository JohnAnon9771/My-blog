import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostCategories() {
  return fs.readdirSync(postsDirectory);
}
const realSlug = join(postsDirectory, 'lua');
fs.readdirSync('src/posts').forEach(file => {
  console.log(file);
});
console.log(realSlug);

// export function getPostsByCategorie(categorie) {
//   const realSlug = fs.readdirSync(join(postsDirectory, categorie));
//   const fullPath = join(postsDirectory, `${categorie}/${realSlug}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);
// }

// export function getAllPosts() {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map(slug => getPostBySlug(slug, fields))
//     .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
//   return posts;
// }

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
