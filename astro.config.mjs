import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Esto le dice a Astro que use Tailwind
  integrations: [tailwind()],
});