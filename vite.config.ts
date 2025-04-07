import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk
          if (id.includes('node_modules')) {
            if (id.includes('react') || 
                id.includes('@radix-ui') || 
                id.includes('class-variance-authority') ||
                id.includes('clsx') ||
                id.includes('tailwind-merge')) {
              return 'vendor';
            }
          }
          // UI components chunk
          if (id.includes('src/components/ui/')) {
            return 'ui';
          }
          // Sections chunk
          if (id.includes('src/components/sections/')) {
            return 'sections';
          }
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    manifest: true,
    sourcemap: false,
    minify: 'esbuild',
    emptyOutDir: true,
    target: 'esnext',
    cssMinify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
  }
}));
