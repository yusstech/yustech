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
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['@radix-ui/react-dropdown-menu', '@radix-ui/react-slot', '@radix-ui/react-tooltip'],
            sections: ['./src/components/sections/'],
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
      chunkSizeWarningLimit: 1000,
      // Performance optimizations
      cssCodeSplit: true,
      brotliSize: true,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: ['@radix-ui/react-icons'],
    },
    define: {
      'process.env': env,
      'process.env.VITE_CLOUDFLARE_SITE_KEY': JSON.stringify(env.VITE_CLOUDFLARE_SITE_KEY)
    }
  };
});
