import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
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
            // Vendor chunks
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor';
              }
              if (id.includes('@radix-ui')) {
                return 'ui';
              }
              if (id.includes('@tanstack')) {
                return 'query';
              }
              return 'vendor';
            }
            // Sections chunk
            if (id.includes('src/components/sections/')) {
              return 'sections';
            }
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        },
        external: [
          // Add any external dependencies that should not be bundled
        ]
      },
      manifest: true,
      sourcemap: false,
      minify: 'esbuild',
      emptyOutDir: true,
      target: 'esnext',
      cssMinify: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1000,
      // Performance optimizations
      cssCodeSplit: true,
      brotliSize: true,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@tanstack/react-query',
        '@radix-ui/react-icons',
        'lucide-react',
        'date-fns',
        'zod',
        'react-hook-form',
        '@hookform/resolvers'
      ],
      exclude: [],
    },
    define: {
      'process.env': env,
      'process.env.VITE_CLOUDFLARE_SITE_KEY': JSON.stringify(env.VITE_CLOUDFLARE_SITE_KEY)
    }
  };
});
