// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      config.devtool = 'cheap-module-source-map';
      // Make DevTools show paths like src/app/events-news/EventsNewsClient.tsx
      if (!config.output) config.output = {};
      config.output.devtoolModuleFilenameTemplate = (info) => {
        const root = config.context || process.cwd();
        const rel = path.relative(root, info.absoluteResourcePath);
        return rel.startsWith('.') ? rel : `./${rel}`.replace(/\\/g, '/');
      };
    }
    return config;
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '/uploads/**' },
      { protocol: 'https', hostname: 'loving-comfort-5b814b6e84.strapiapp.com', pathname: '/uploads/**' },
      { protocol: 'https', hostname: 'loving-comfort-5b814b6e84.media.strapiapp.com', pathname: '/**' },
      { protocol: 'https', hostname: 'dl.dropboxusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'example.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'yavuzceliker.github.io', pathname: '/**' },
    ],
  },
};

module.exports = nextConfig;