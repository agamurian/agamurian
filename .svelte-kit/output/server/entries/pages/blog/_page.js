import { _ as __vite_glob_1_3, a as __vite_glob_1_2, b as __vite_glob_1_1, c as __vite_glob_1_0 } from "../../../chunks/2025-04-new-beginnings.js";
async function load() {
  const modules = /* @__PURE__ */ Object.assign({ "/src/posts/2025-01-image-processing.md": __vite_glob_1_0, "/src/posts/2025-02-shaders-explained.md": __vite_glob_1_1, "/src/posts/2025-03-functional-programming.md": __vite_glob_1_2, "/src/posts/2025-04-new-beginnings.md": __vite_glob_1_3 });
  const posts = Object.entries(modules).map(([path, module]) => {
    const slug = path.split("/").at(-1)?.replace(".md", "");
    return { ...module.metadata, slug };
  }).filter((post) => post.published !== false).sort((a, b) => new Date(b.date) - new Date(a.date));
  return { posts };
}
export {
  load
};
