import { v as head, G as attr_style, y as ensure_array_like, x as attr, z as stringify, F as bind_props } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.meta.title)} - Blog</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.meta.excerpt)}/> <meta property="og:title"${attr("content", data.meta.title)}/> <meta property="og:description"${attr("content", data.meta.excerpt)}/> <meta property="og:type" content="article"/> <meta property="og:image"${attr("content", data.meta.image || "/og-image.png")}/> <meta name="twitter:card" content="summary_large_image"/>`);
    });
    $$renderer2.push(`<article class="section blog-post"><div class="blog-header svelte-1teoznn"${attr_style("opacity:1")}><div class="blog-meta svelte-1teoznn"><span class="author">By ${escape_html(data.meta.author)}</span> <span class="separator svelte-1teoznn">•</span> <time class="date">${escape_html(new Date(data.meta.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</time> <span class="separator svelte-1teoznn">•</span> <span class="reading-time">${escape_html(data.meta.readingTime)} min read</span></div> <div class="tags svelte-1teoznn"${attr_style("opacity:1")}><!--[-->`);
    const each_array = ensure_array_like(data.meta.tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span class="tag svelte-1teoznn">#${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="blog-content svelte-1teoznn"><!---->`);
    data.content?.($$renderer2, {});
    $$renderer2.push(`<!----></div> <div class="blog-footer svelte-1teoznn"><hr/> <h4>About the Author</h4> <p><strong>${escape_html(data.meta.author)}</strong> is a software developer and digital artist</p> <div class="post-navigation svelte-1teoznn">`);
    if (data.previousPost) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `/blog/${stringify(data.previousPost.slug)}`)} class="nav-link prev svelte-1teoznn">← ${escape_html(data.previousPost.title)}</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.nextPost) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `/blog/${stringify(data.nextPost.slug)}`)} class="nav-link next svelte-1teoznn">${escape_html(data.nextPost.title)} →</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
