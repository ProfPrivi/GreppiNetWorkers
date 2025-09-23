// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AI per Docenti 2025",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          collapsed: true,
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "SQL",
          collapsed: false,
          items: [
            { label: "SQL — Parte 1", slug: "sql/sql-p1" },
            { label: "SQL — Parte 2", slug: "sql/sql-p2" },
            { label: "SQL — Parte 3", slug: "sql/sql-p3" },
          ],
        },
        {
          label: "Reference",
          collapsed: true,
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
  site: "https://malafronte.github.io",
  base: "/materiale-corso/",
});
