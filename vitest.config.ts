/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default getViteConfig({
  plugins: [
    tailwindcss()
  ],
  test: { /* Vitest configuration options */ },
},
);
