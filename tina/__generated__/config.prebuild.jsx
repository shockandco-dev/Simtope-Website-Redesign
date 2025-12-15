// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description (SEO)"
          },
          // Hero Section Fields
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline" },
              { type: "image", name: "image", label: "Hero Image" }
            ]
          },
          // Services Section (Home)
          {
            type: "object",
            name: "services",
            label: "Services List",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              }
            },
            fields: [
              { type: "string", name: "title", label: "Service Title" },
              { type: "string", name: "description", label: "Description" },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: ["Wifi", "Smartphone", "Globe", "Satellite", "Cpu", "Signal", "Zap", "Truck", "Mountain"]
              },
              { type: "string", name: "features", label: "Features", list: true }
            ]
          },
          // Stats Section
          {
            type: "object",
            name: "stats",
            label: "Stats (Features Section)",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value (e.g. 190)" },
              { type: "string", name: "suffix", label: "Suffix (e.g. +)" },
              { type: "string", name: "label", label: "Label" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
