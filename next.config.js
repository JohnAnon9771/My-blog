const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  extension: /\.mdx?$/,
});

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

function isDevelopment(phase) {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withMDX({
      reactStrictMode: true,
      pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    });
  } else {
    return withMDX({
      pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    });
  }
}

module.exports = phase => isDevelopment(phase);
