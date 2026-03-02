/**
 * Custom image loader. For Dropbox URLs we return the URL as-is so the browser
 * loads it directly — avoids 500 when the remote server blocks server-side requests.
 */
function imageLoader({ src, width, quality }) {
  if (src.includes('dropboxusercontent.com')) {
    return src;
  }
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality ?? 75}`;
}

module.exports = imageLoader;
