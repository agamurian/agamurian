import { _ as __vite_glob_1_3, a as __vite_glob_1_2, b as __vite_glob_1_1, c as __vite_glob_1_0 } from "../../../../chunks/2025-04-new-beginnings.js";
import { error } from "@sveltejs/kit";
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/2025-01-image-processing.md": () => import("../../../../chunks/2025-04-new-beginnings.js").then((n) => n.c), "../../../posts/2025-02-shaders-explained.md": () => import("../../../../chunks/2025-04-new-beginnings.js").then((n) => n.b), "../../../posts/2025-03-functional-programming.md": () => import("../../../../chunks/2025-04-new-beginnings.js").then((n) => n.a), "../../../posts/2025-04-new-beginnings.md": () => import("../../../../chunks/2025-04-new-beginnings.js").then((n) => n._) }), `../../../posts/${params.slug}.md`, 5);
    if (!post) {
      throw error(404, "Post not found");
    }
    const allPosts = /* @__PURE__ */ Object.assign({ "../../../posts/2025-01-image-processing.md": __vite_glob_1_0, "../../../posts/2025-02-shaders-explained.md": __vite_glob_1_1, "../../../posts/2025-03-functional-programming.md": __vite_glob_1_2, "../../../posts/2025-04-new-beginnings.md": __vite_glob_1_3 });
    const posts = Object.entries(allPosts).map(([path, module]) => {
      const slug = path.split("/").at(-1)?.replace(".md", "");
      return { ...module.metadata, slug };
    }).filter((p) => p.published !== false).sort((a, b) => new Date(b.date) - new Date(a.date));
    const currentIndex = posts.findIndex((p) => p.slug === params.slug);
    const previousPost = posts[currentIndex + 1] || null;
    const nextPost = posts[currentIndex - 1] || null;
    return {
      meta: post.metadata,
      content: post.default,
      previousPost,
      nextPost
    };
  } catch (err) {
    throw error(404, "Could not load blog post");
  }
}
export {
  load
};
