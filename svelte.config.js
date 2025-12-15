import adapter from "@sveltejs/adapter-auto";
import { enhancedImages } from "@sveltejs/enhanced-img";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [enhancedImages()],
  kit: {
    adapter: adapter(),
  },
};

export default config;
