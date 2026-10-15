import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ade Halim Alfajri | Portfolio & EdTech Explorer",
    short_name: "Halim Portfolio",
    description: "Bridging Arabic Pedagogy with Modern Web Engineering",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
