// Custom image loader that bypasses Next.js image optimization
// This prevents the WASM error with Node.js 20
export default function imageLoader({ src, width, quality }) {
  // Return the image source as-is without any processing
  return src;
}

