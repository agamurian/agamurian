import { v as head, y as ensure_array_like, x as attr, z as stringify, F as bind_props } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredPosts, allTags, allCategories;
    let data = $$props["data"];
    const { posts } = data;
    let selectedCategory = "all";
    let selectedTag = "all";
    filteredPosts = posts.filter((post) => {
      const categoryMatch = selectedCategory === "all";
      const tagMatch = selectedTag === "all";
      return categoryMatch && tagMatch;
    });
    allTags = [...new Set(posts.flatMap((p) => p.tags))];
    allCategories = [...new Set(posts.map((p) => p.category))];
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Blog - Andrey Golovin</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Articles about graphics, programming, and creative coding"/>`);
    });
    $$renderer2.push(`<section class="section"><h1 class="header">Blog</h1> <p class="subtitle svelte-u4k2t">Thoughts on graphics, programming, and creative technology</p> <div class="filters svelte-u4k2t"><div class="filter-group svelte-u4k2t"><label class="svelte-u4k2t">Category:</label> `);
    $$renderer2.select(
      { value: selectedCategory, class: "" },
      ($$renderer3) => {
        $$renderer3.option({ value: "all" }, ($$renderer4) => {
          $$renderer4.push(`All`);
        });
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(allCategories);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let category = each_array[$$index];
          $$renderer3.option({ value: category }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(category)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      },
      "svelte-u4k2t"
    );
    $$renderer2.push(`</div> <div class="filter-group svelte-u4k2t"><label class="svelte-u4k2t">Tag:</label> `);
    $$renderer2.select(
      { value: selectedTag, class: "" },
      ($$renderer3) => {
        $$renderer3.option({ value: "all" }, ($$renderer4) => {
          $$renderer4.push(`All`);
        });
        $$renderer3.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(allTags);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let tag = each_array_1[$$index_1];
          $$renderer3.option({ value: tag }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(tag)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      },
      "svelte-u4k2t"
    );
    $$renderer2.push(`</div></div> <div class="posts-list svelte-u4k2t"><!--[-->`);
    const each_array_2 = ensure_array_like(filteredPosts);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let post = each_array_2[$$index_2];
      $$renderer2.push(`<article class="post-item svelte-u4k2t"><a${attr("href", `/blog/${stringify(post.slug)}`)} class="post-link svelte-u4k2t"><h3 class="post-title svelte-u4k2t">${escape_html(post.title)}</h3></a> <p class="post-excerpt svelte-u4k2t">${escape_html(post.excerpt)}</p> <div class="post-footer svelte-u4k2t"><span class="category svelte-u4k2t">${escape_html(post.category)}</span> <span class="reading-time">${escape_html(post.readingTime)} min read</span> <time class="date">${escape_html(new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }))}</time></div></article>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (filteredPosts.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="no-posts svelte-u4k2t"><p>No posts found with these filters.</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></section>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
