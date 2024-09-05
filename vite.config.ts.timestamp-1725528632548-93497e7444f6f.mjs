// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "file:///C:/Users/Bob/Desktop/Work/sts-search/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Bob/Desktop/Work/sts-search/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///C:/Users/Bob/Desktop/Work/sts-search/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Bob\\Desktop\\Work\\sts-search";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Bob/Desktop/Work/sts-search/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "sts__search"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCb2JcXFxcRGVza3RvcFxcXFxXb3JrXFxcXHN0cy1zZWFyY2hcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEJvYlxcXFxEZXNrdG9wXFxcXFdvcmtcXFxcc3RzLXNlYXJjaFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQm9iL0Rlc2t0b3AvV29yay9zdHMtc2VhcmNoL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogXCIvXCIsXHJcbiAgcGx1Z2luczogW3Z1ZSgpLCBkdHMoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtYW5pZmVzdDogdHJ1ZSxcclxuICAgIG1pbmlmeTogdHJ1ZSxcclxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJzdHNfX3NlYXJjaFwiLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsU0FBUyxlQUFlLFdBQVc7QUFDN1UsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFBa0osSUFBTSwyQ0FBMkM7QUFNNU8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxFQUN0QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1Isc0JBQXNCO0FBQUEsSUFDdEIsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzdDLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
