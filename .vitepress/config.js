import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";
import { name as packageName } from "../package.json";

const brandId = "eox";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig(brandId),
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  vite:{
    envPrefix:["VITE_"],
    server:{
      allowedHosts: true
    }
  },
  themeConfig: {
    
    nav: [
      { text: "Home", link: "/" },
    ]
  },
});
