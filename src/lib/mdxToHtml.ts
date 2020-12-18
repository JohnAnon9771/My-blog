import remark from 'remark';
import html from 'remark-html';

export default async function mdxToHtml(mdx: string): Promise<string> {
  const result = await remark().use(html).process(mdx);
  return result.toString();
}
