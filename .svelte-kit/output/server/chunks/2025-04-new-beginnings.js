import "clsx";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const metadata$3 = {
  "title": "Image Processing: From Theory to Practice",
  "date": "2025-01-15",
  "author": "Andrey Golovin",
  "category": "graphics",
  "tags": ["image-processing", "algorithms", "python"],
  "published": true,
  "featured": true,
  "excerpt": "Explore the fundamentals of digital image processing and how to apply convolutions, filters, and transformations to create stunning visual effects.",
  "readingTime": 12
};
const {
  title: title$3,
  date: date$3,
  author: author$3,
  category: category$3,
  tags: tags$3,
  published: published$3,
  featured: featured$3,
  excerpt: excerpt$3,
  readingTime: readingTime$3
} = metadata$3;
function _025_01_image_processing_md($$renderer) {
  $$renderer.push(`<h1 id="image-processing-from-theory-to-practice">Image Processing: From Theory to Practice</h1> <h2 id="introduction">Introduction</h2> <p>Digital image processing is one of the most exciting fields in computer science and graphics. Whether you’re building photo editing software, creating artistic effects, or developing computer vision systems, understanding image processing is essential.</p> <p>In this post, we’ll explore:</p> <ul><li>Fundamental concepts like pixels and color spaces</li> <li>Common filters and their applications</li> <li>Building your own image processor</li> <li>Real-world performance considerations</li></ul> <h2 id="part-1-understanding-pixels-and-color-spaces">Part 1: Understanding Pixels and Color Spaces</h2> <h3 id="rgb-and-beyond">RGB and Beyond</h3> <p>Every digital image is composed of pixels arranged in a 2D grid. Each pixel contains color information, most commonly in RGB (Red, Green, Blue) format.</p> <pre class="language-python">${html(`<code class="language-python"><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># Load an image</span>
img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'example.jpg'</span><span class="token punctuation">)</span>
pixels <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>img<span class="token punctuation">)</span>

<span class="token comment"># pixels.shape gives us (height, width, 3) for RGB</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Image dimensions: </span><span class="token interpolation"><span class="token punctuation">&#123;</span>pixels<span class="token punctuation">.</span>shape<span class="token punctuation">&#125;</span></span><span class="token string">"</span></span><span class="token punctuation">)</span></code>`)}</pre> <h3 id="working-with-channels">Working with Channels</h3> <p>Each color channel can be manipulated independently:</p> <pre class="language-python">${html(`<code class="language-python"><span class="token comment"># Extract individual channels</span>
red_channel <span class="token operator">=</span> pixels<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
green_channel <span class="token operator">=</span> pixels<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
blue_channel <span class="token operator">=</span> pixels<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment"># Create a grayscale image</span>
grayscale <span class="token operator">=</span> np<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>pixels<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span></code>`)}</pre> <h2 id="part-2-filters-and-convolutions">Part 2: Filters and Convolutions</h2> <h3 id="kernel-based-filtering">Kernel-Based Filtering</h3> <p>Convolution is the mathematical operation that powers most image filters. A kernel (small matrix) is slid across the image, computing weighted sums.</p> <p><strong>Common kernels:</strong></p> <pre class="language-python">${html(`<code class="language-python"><span class="token comment"># Blur kernel (3x3)</span>
blur_kernel <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">9</span>

<span class="token comment"># Sharpen kernel</span>
sharpen_kernel <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># Sobel edge detection (X direction)</span>
sobel_x <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span></code>`)}</pre> <h3 id="applying-convolution">Applying Convolution</h3> <pre class="language-python">${html(`<code class="language-python"><span class="token keyword">from</span> scipy <span class="token keyword">import</span> signal

<span class="token keyword">def</span> <span class="token function">apply_filter</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> kernel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Apply a convolution filter to an image."""</span>
    filtered <span class="token operator">=</span> signal<span class="token punctuation">.</span>convolve2d<span class="token punctuation">(</span>
        image<span class="token punctuation">,</span>
        kernel<span class="token punctuation">,</span>
        mode<span class="token operator">=</span><span class="token string">'same'</span><span class="token punctuation">,</span>
        boundary<span class="token operator">=</span><span class="token string">'symm'</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> np<span class="token punctuation">.</span>clip<span class="token punctuation">(</span>filtered<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>uint8<span class="token punctuation">)</span>

<span class="token comment"># Apply blur</span>
blurred <span class="token operator">=</span> apply_filter<span class="token punctuation">(</span>grayscale<span class="token punctuation">,</span> blur_kernel<span class="token punctuation">)</span>

<span class="token comment"># Apply edge detection</span>
edges <span class="token operator">=</span> apply_filter<span class="token punctuation">(</span>grayscale<span class="token punctuation">,</span> sobel_x<span class="token punctuation">)</span></code>`)}</pre> <h2 id="part-3-advanced-techniques">Part 3: Advanced Techniques</h2> <h3 id="histogram-equalization">Histogram Equalization</h3> <p>Improve contrast by redistributing pixel intensities:</p> <pre class="language-python">${html(`<code class="language-python"><span class="token keyword">def</span> <span class="token function">histogram_equalization</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Improve image contrast using histogram equalization."""</span>
    hist<span class="token punctuation">,</span> bins <span class="token operator">=</span> np<span class="token punctuation">.</span>histogram<span class="token punctuation">(</span>image<span class="token punctuation">.</span>flatten<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    cdf <span class="token operator">=</span> hist<span class="token punctuation">.</span>cumsum<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cdf_normalized <span class="token operator">=</span> cdf <span class="token operator">*</span> hist<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> cdf<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment"># Map old values to new values</span>
    cdf_m <span class="token operator">=</span> np<span class="token punctuation">.</span>ma<span class="token punctuation">.</span>masked_equal<span class="token punctuation">(</span>cdf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    cdf_m <span class="token operator">=</span> <span class="token punctuation">(</span>cdf_m <span class="token operator">-</span> cdf_m<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">255</span> <span class="token operator">/</span> <span class="token punctuation">(</span>cdf_m<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> cdf_m<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    cdf <span class="token operator">=</span> np<span class="token punctuation">.</span>ma<span class="token punctuation">.</span>filled<span class="token punctuation">(</span>cdf_m<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token string">'uint8'</span><span class="token punctuation">)</span>
    
    <span class="token keyword">return</span> cdf<span class="token punctuation">[</span>image<span class="token punctuation">]</span></code>`)}</pre> <h3 id="bilateral-filtering">Bilateral Filtering</h3> <p>Preserve edges while smoothing:</p> <pre class="language-python">${html(`<code class="language-python"><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>ndimage <span class="token keyword">import</span> gaussian_filter

<span class="token keyword">def</span> <span class="token function">bilateral_filter</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> sigma_spatial<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span> sigma_intensity<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Edge-preserving blur filter."""</span>
    h<span class="token punctuation">,</span> w <span class="token operator">=</span> image<span class="token punctuation">.</span>shape
    result <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros_like<span class="token punctuation">(</span>image<span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token builtin">float</span><span class="token punctuation">)</span>
    
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># This is simplified; production code would optimize this</span>
            pixel_intensity <span class="token operator">=</span> image<span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span>
            
            <span class="token comment"># Gaussian spatial weight</span>
            x_dist <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">min</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            y_dist <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> j<span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">min</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            
            <span class="token comment"># Apply weights...</span>
            
    <span class="token keyword">return</span> np<span class="token punctuation">.</span>clip<span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>uint8<span class="token punctuation">)</span></code>`)}</pre> <h2 id="part-4-performance-optimization">Part 4: Performance Optimization</h2> <h3 id="using-numpy-vectorization">Using NumPy Vectorization</h3> <pre class="language-python">${html(`<code class="language-python"><span class="token comment"># SLOW: Python loops</span>
slow_result <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros_like<span class="token punctuation">(</span>image<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        slow_result<span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> image<span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span>

<span class="token comment"># FAST: NumPy vectorization</span>
fast_result <span class="token operator">=</span> image <span class="token operator">*</span> <span class="token number">2</span></code>`)}</pre> <h3 id="gpu-acceleration-with-cupy">GPU Acceleration with CuPy</h3> <p>For large images or real-time processing:</p> <pre class="language-python">${html(`<code class="language-python"><span class="token keyword">import</span> cupy <span class="token keyword">as</span> cp

<span class="token keyword">def</span> <span class="token function">gpu_blur</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Fast blur using GPU."""</span>
    gpu_image <span class="token operator">=</span> cp<span class="token punctuation">.</span>asarray<span class="token punctuation">(</span>image<span class="token punctuation">)</span>
    kernel <span class="token operator">=</span> cp<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">9</span>
    result <span class="token operator">=</span> cp<span class="token punctuation">.</span>convolve<span class="token punctuation">(</span>gpu_image<span class="token punctuation">,</span> kernel<span class="token punctuation">)</span>
    <span class="token keyword">return</span> cp<span class="token punctuation">.</span>asnumpy<span class="token punctuation">(</span>result<span class="token punctuation">)</span></code>`)}</pre> <h2 id="practical-example-creating-an-artistic-filter">Practical Example: Creating an Artistic Filter</h2> <pre class="language-python">${html(`<code class="language-python"><span class="token keyword">def</span> <span class="token function">artistic_filter</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> blur_amount<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> edge_threshold<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Create a stylized artistic effect."""</span>
    <span class="token comment"># Step 1: Bilateral filter for smoothing</span>
    smoothed <span class="token operator">=</span> bilateral_filter<span class="token punctuation">(</span>image<span class="token punctuation">,</span> blur_amount<span class="token punctuation">)</span>
    
    <span class="token comment"># Step 2: Detect edges</span>
    edges <span class="token operator">=</span> apply_filter<span class="token punctuation">(</span>smoothed<span class="token punctuation">,</span> sobel_x<span class="token punctuation">)</span>
    
    <span class="token comment"># Step 3: Create mask where edges are strong</span>
    edge_mask <span class="token operator">=</span> edges <span class="token operator">></span> edge_threshold
    
    <span class="token comment"># Step 4: Posterize (reduce colors)</span>
    posterized <span class="token operator">=</span> <span class="token punctuation">(</span>smoothed <span class="token operator">//</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span>
    
    <span class="token comment"># Step 5: Combine</span>
    result <span class="token operator">=</span> posterized<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
    result<span class="token punctuation">[</span>edge_mask<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># Black edges</span>
    
    <span class="token keyword">return</span> result</code>`)}</pre> <h2 id="conclusion">Conclusion</h2> <p>Image processing is a vast field with applications from medical imaging to artistic creation. The techniques covered here form the foundation for more advanced work. Experiment with different kernels, combine filters, and discover your own effects!</p> <h3 id="further-reading">Further Reading</h3> <ul><li>OpenCV (cv2) - Industry standard library</li> <li>scikit-image - Academic/scientific focus</li> <li>GIMP Plugin Development - Apply these concepts to a real application</li></ul> <hr/> <p><em>What image processing projects are you working on? Share in the comments!</em></p>`);
}
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _025_01_image_processing_md,
  metadata: metadata$3
}, Symbol.toStringTag, { value: "Module" }));
const metadata$2 = {
  "title": "Shaders 101: How They Transform Your Graphics",
  "date": "2025-02-01",
  "author": "Andrey Golovin",
  "category": "graphics",
  "tags": ["shaders", "webgl", "glsl"],
  "published": true,
  "featured": true,
  "excerpt": "A comprehensive guide to understanding shaders, from vertex to fragment processing, with interactive examples and real-world applications.",
  "readingTime": 15
};
const {
  title: title$2,
  date: date$2,
  author: author$2,
  category: category$2,
  tags: tags$2,
  published: published$2,
  featured: featured$2,
  excerpt: excerpt$2,
  readingTime: readingTime$2
} = metadata$2;
function _025_02_shaders_explained_md($$renderer) {
  $$renderer.push(`<h1 id="shaders-101-how-they-transform-your-graphics">Shaders 101: How They Transform Your Graphics</h1> <h2 id="what-are-shaders">What Are Shaders?</h2> <p>Shaders are specialized programs that run on your GPU to calculate rendering effects on a per-pixel (fragment shader) or per-vertex (vertex shader) basis. They’re the secret sauce behind stunning graphics in games, web applications, and creative projects.</p> <p>Think of a shader as a function that gets called millions of times per frame—once for every pixel or vertex on screen.</p> <h2 id="the-shader-pipeline">The Shader Pipeline</h2> <h2 id="vertex-shaders">Vertex Shaders</h2> <p>Vertex shaders process each vertex of your geometry independently.</p> <h3 id="basic-vertex-shader-example">Basic Vertex Shader Example</h3> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">version</span> <span class="token expression"><span class="token number">300</span> es</span></span>

<span class="token keyword">in</span> <span class="token keyword">vec3</span> position<span class="token punctuation">;</span>
<span class="token keyword">in</span> <span class="token keyword">vec3</span> normal<span class="token punctuation">;</span>

<span class="token keyword">uniform</span> <span class="token keyword">mat4</span> uMatrix<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">mat4</span> uNormalMatrix<span class="token punctuation">;</span>

<span class="token keyword">out</span> <span class="token keyword">vec3</span> vNormal<span class="token punctuation">;</span>
<span class="token keyword">out</span> <span class="token keyword">vec3</span> vPosition<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// Transform vertex position</span>
    <span class="token keyword">vec4</span> worldPosition <span class="token operator">=</span> uMatrix <span class="token operator">*</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl_Position <span class="token operator">=</span> worldPosition<span class="token punctuation">;</span>
    
    <span class="token comment">// Transform normal for lighting</span>
    vNormal <span class="token operator">=</span> <span class="token function">normalize</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span>uNormalMatrix <span class="token operator">*</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>normal<span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    vPosition <span class="token operator">=</span> worldPosition<span class="token punctuation">.</span>xyz<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h3 id="common-vertex-operations">Common Vertex Operations</h3> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token comment">// Wave deformation</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec3</span> pos <span class="token operator">=</span> position<span class="token punctuation">;</span>
    pos<span class="token punctuation">.</span>y <span class="token operator">+=</span> <span class="token function">sin</span><span class="token punctuation">(</span>pos<span class="token punctuation">.</span>x <span class="token operator">+</span> uTime<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
    gl_Position <span class="token operator">=</span> uMatrix <span class="token operator">*</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Vertex displacement along normal</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec3</span> displaced <span class="token operator">=</span> position <span class="token operator">+</span> normal <span class="token operator">*</span> <span class="token function">sin</span><span class="token punctuation">(</span>uTime<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
    gl_Position <span class="token operator">=</span> uMatrix <span class="token operator">*</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>displaced<span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Procedural animation</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec3</span> pos <span class="token operator">=</span> position<span class="token punctuation">;</span>
    <span class="token keyword">float</span> wave <span class="token operator">=</span> <span class="token function">sin</span><span class="token punctuation">(</span>uTime <span class="token operator">+</span> pos<span class="token punctuation">.</span>z <span class="token operator">*</span> <span class="token number">5.0</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.3</span><span class="token punctuation">;</span>
    pos<span class="token punctuation">.</span>x <span class="token operator">+=</span> wave<span class="token punctuation">;</span>
    gl_Position <span class="token operator">=</span> uMatrix <span class="token operator">*</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h2 id="fragment-shaders">Fragment Shaders</h2> <p>Fragment shaders determine the color of each pixel. This is where the visual magic happens.</p> <h3 id="basic-fragment-shader">Basic Fragment Shader</h3> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">version</span> <span class="token expression"><span class="token number">300</span> es</span></span>
<span class="token keyword">precision</span> <span class="token keyword">mediump</span> <span class="token keyword">float</span><span class="token punctuation">;</span>

<span class="token keyword">uniform</span> <span class="token keyword">sampler2D</span> uTexture<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">float</span> uTime<span class="token punctuation">;</span>

<span class="token keyword">in</span> <span class="token keyword">vec2</span> vUv<span class="token punctuation">;</span>
<span class="token keyword">in</span> <span class="token keyword">vec3</span> vNormal<span class="token punctuation">;</span>

<span class="token keyword">out</span> <span class="token keyword">vec4</span> outColor<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec3</span> normal <span class="token operator">=</span> <span class="token function">normalize</span><span class="token punctuation">(</span>vNormal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Simple lighting</span>
    <span class="token keyword">vec3</span> lightDir <span class="token operator">=</span> <span class="token function">normalize</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> light <span class="token operator">=</span> <span class="token function">dot</span><span class="token punctuation">(</span>normal<span class="token punctuation">,</span> lightDir<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.5</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Sample texture</span>
    <span class="token keyword">vec4</span> texColor <span class="token operator">=</span> <span class="token function">texture</span><span class="token punctuation">(</span>uTexture<span class="token punctuation">,</span> vUv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Combine</span>
    outColor <span class="token operator">=</span> texColor <span class="token operator">*</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span>light<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h3 id="creative-fragment-effects">Creative Fragment Effects</h3> <h4 id="1-animated-gradient">1. Animated Gradient</h4> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec2</span> uv <span class="token operator">=</span> gl_FragCoord<span class="token punctuation">.</span>xy <span class="token operator">/</span> iResolution<span class="token punctuation">.</span>xy<span class="token punctuation">;</span>
    <span class="token keyword">vec3</span> color <span class="token operator">=</span> <span class="token number">0.5</span> <span class="token operator">+</span> <span class="token number">0.5</span> <span class="token operator">*</span> <span class="token function">cos</span><span class="token punctuation">(</span>iTime <span class="token operator">+</span> uv<span class="token punctuation">.</span>xyx <span class="token operator">+</span> <span class="token keyword">vec3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    outColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h4 id="2-voronoi-noise">2. Voronoi Noise</h4> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token keyword">float</span> <span class="token function">voronoi</span><span class="token punctuation">(</span><span class="token keyword">vec2</span> uv<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec2</span> iuv <span class="token operator">=</span> <span class="token function">floor</span><span class="token punctuation">(</span>uv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">vec2</span> fuv <span class="token operator">=</span> <span class="token function">fract</span><span class="token punctuation">(</span>uv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">float</span> minDist <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> x <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> y <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> y<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">vec2</span> neighbor <span class="token operator">=</span> <span class="token keyword">vec2</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">vec2</span> point <span class="token operator">=</span> <span class="token function">sin</span><span class="token punctuation">(</span>iuv <span class="token operator">+</span> neighbor<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.5</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
            <span class="token keyword">float</span> dist <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span>fuv <span class="token operator">-</span> neighbor <span class="token operator">-</span> point<span class="token punctuation">)</span><span class="token punctuation">;</span>
            minDist <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>minDist<span class="token punctuation">,</span> dist<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">return</span> minDist<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec2</span> uv <span class="token operator">=</span> gl_FragCoord<span class="token punctuation">.</span>xy <span class="token operator">/</span> iResolution<span class="token punctuation">.</span>xy<span class="token punctuation">;</span>
    <span class="token keyword">float</span> v <span class="token operator">=</span> <span class="token function">voronoi</span><span class="token punctuation">(</span>uv <span class="token operator">*</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    outColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h4 id="3-procedural-marble">3. Procedural Marble</h4> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token keyword">float</span> <span class="token function">noise</span><span class="token punctuation">(</span><span class="token keyword">vec2</span> uv<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token function">sin</span><span class="token punctuation">(</span>uv<span class="token punctuation">.</span>x <span class="token operator">*</span> <span class="token number">10.0</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">sin</span><span class="token punctuation">(</span>uv<span class="token punctuation">.</span>y <span class="token operator">*</span> <span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec2</span> uv <span class="token operator">=</span> gl_FragCoord<span class="token punctuation">.</span>xy <span class="token operator">/</span> iResolution<span class="token punctuation">.</span>xy<span class="token punctuation">;</span>
    
    <span class="token keyword">float</span> n <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">float</span> freq <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token keyword">float</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        n <span class="token operator">+=</span> <span class="token function">noise</span><span class="token punctuation">(</span>uv <span class="token operator">*</span> freq<span class="token punctuation">)</span> <span class="token operator">/</span> freq<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">float</span> pattern <span class="token operator">=</span> <span class="token function">sin</span><span class="token punctuation">(</span>uv<span class="token punctuation">.</span>x <span class="token operator">*</span> <span class="token number">10.0</span> <span class="token operator">+</span> n <span class="token operator">*</span> <span class="token number">5.0</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.5</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
    outColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h2 id="implementing-shaders-in-webglthreejs">Implementing Shaders in WebGL/Three.js</h2> <h3 id="using-threejs-shadermaterial">Using Three.js ShaderMaterial</h3> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token keyword">const</span> vertexShader <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
    varying vec2 vUv;
    
    void main() &#123;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    &#125;
</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fragmentShader <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
    uniform float uTime;
    varying vec2 vUv;
    
    void main() &#123;
        vec3 color = 0.5 + 0.5 * cos(uTime + vUv.xyx + vec3(0, 2, 4));
        gl_FragColor = vec4(color, 1.0);
    &#125;
</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>ShaderMaterial</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    vertexShader<span class="token punctuation">,</span>
    fragmentShader<span class="token punctuation">,</span>
    uniforms<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        uTime<span class="token operator">:</span> <span class="token punctuation">&#123;</span> value<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Update uniforms in animation loop</span>
<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    material<span class="token punctuation">.</span>uniforms<span class="token punctuation">.</span>uTime<span class="token punctuation">.</span>value <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.001</span><span class="token punctuation">;</span>
    renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h2 id="common-shader-patterns">Common Shader Patterns</h2> <h3 id="1-uv-manipulation">1. UV Manipulation</h3> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token comment">// Tile pattern</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec2</span> uv <span class="token operator">=</span> <span class="token function">fract</span><span class="token punctuation">(</span>vUv <span class="token operator">*</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    outColor <span class="token operator">=</span> <span class="token function">texture</span><span class="token punctuation">(</span>uTexture<span class="token punctuation">,</span> uv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Radial coordinates</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec2</span> center <span class="token operator">=</span> vUv <span class="token operator">-</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> angle <span class="token operator">=</span> <span class="token function">atan</span><span class="token punctuation">(</span>center<span class="token punctuation">.</span>y<span class="token punctuation">,</span> center<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> dist <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span>center<span class="token punctuation">)</span><span class="token punctuation">;</span>
    outColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span>angle <span class="token operator">/</span> <span class="token number">6.28</span><span class="token punctuation">,</span> dist<span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h3 id="2-lighting-models">2. Lighting Models</h3> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token comment">// Phong lighting</span>
<span class="token keyword">vec3</span> <span class="token function">phong</span><span class="token punctuation">(</span><span class="token keyword">vec3</span> normal<span class="token punctuation">,</span> <span class="token keyword">vec3</span> lightDir<span class="token punctuation">,</span> <span class="token keyword">vec3</span> viewDir<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// Ambient</span>
    <span class="token keyword">vec3</span> ambient <span class="token operator">=</span> <span class="token keyword">vec3</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Diffuse</span>
    <span class="token keyword">float</span> diff <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token function">dot</span><span class="token punctuation">(</span>normal<span class="token punctuation">,</span> lightDir<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">vec3</span> diffuse <span class="token operator">=</span> diff <span class="token operator">*</span> <span class="token keyword">vec3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Specular</span>
    <span class="token keyword">vec3</span> reflectDir <span class="token operator">=</span> <span class="token function">reflect</span><span class="token punctuation">(</span><span class="token operator">-</span>lightDir<span class="token punctuation">,</span> normal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> spec <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">dot</span><span class="token punctuation">(</span>viewDir<span class="token punctuation">,</span> reflectDir<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">32.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">vec3</span> specular <span class="token operator">=</span> spec <span class="token operator">*</span> <span class="token keyword">vec3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> ambient <span class="token operator">+</span> diffuse <span class="token operator">+</span> specular<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h3 id="3-displacement-mapping">3. Displacement Mapping</h3> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token keyword">uniform</span> <span class="token keyword">sampler2D</span> uDisplacement<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">float</span> uStrength<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">vec4</span> displacement <span class="token operator">=</span> <span class="token function">texture</span><span class="token punctuation">(</span>uDisplacement<span class="token punctuation">,</span> vUv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">vec3</span> newPos <span class="token operator">=</span> position <span class="token operator">+</span> normal <span class="token operator">*</span> displacement<span class="token punctuation">.</span>r <span class="token operator">*</span> uStrength<span class="token punctuation">;</span>
    gl_Position <span class="token operator">=</span> projectionMatrix <span class="token operator">*</span> modelViewMatrix <span class="token operator">*</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>newPos<span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h2 id="performance-tips">Performance Tips</h2> <ol><li><strong>Minimize branching</strong> - Conditionals are expensive on GPUs</li> <li><strong>Use vec4 operations</strong> - Take advantage of parallel processing</li> <li><strong>Avoid expensive functions</strong> - sin, cos are relatively slow</li> <li><strong>Pre-compute when possible</strong> - Calculate outside shader, pass as uniform</li> <li><strong>Use appropriate precision</strong> - <code>lowp</code> for mobile, <code>mediump</code> for mid-range</li></ol> <h2 id="common-mistakes-to-avoid">Common Mistakes to Avoid</h2> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token comment">// ❌ SLOW: Loop with dynamic iterations</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">int</span><span class="token punctuation">(</span>uCount<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span>

<span class="token comment">// ✅ FAST: Fixed loop count</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span>

<span class="token comment">// ❌ SLOW: Complex branching</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition1<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>condition2<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">&#125;</span>

<span class="token comment">// ✅ FAST: Use mix() and step() functions</span>
<span class="token keyword">float</span> result <span class="token operator">=</span> <span class="token function">mix</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token function">step</span><span class="token punctuation">(</span>threshold<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ❌ SLOW: Recalculating same value</span>
<span class="token keyword">float</span> val1 <span class="token operator">=</span> <span class="token function">expensive_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> val2 <span class="token operator">=</span> <span class="token function">expensive_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ✅ FAST: Calculate once, reuse</span>
<span class="token keyword">float</span> val <span class="token operator">=</span> <span class="token function">expensive_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> val1 <span class="token operator">=</span> val<span class="token punctuation">;</span>
<span class="token keyword">float</span> val2 <span class="token operator">=</span> val<span class="token punctuation">;</span></code>`)}</pre> <h2 id="debugging-shaders">Debugging Shaders</h2> <pre class="language-glsl">${html(`<code class="language-glsl"><span class="token comment">// Visualize normals</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    outColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>vNormal <span class="token operator">*</span> <span class="token number">0.5</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Visualize UVs</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    outColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>vUv<span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Show depth</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    outColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span>gl_FragCoord<span class="token punctuation">.</span>z<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Checkerboard for debugging</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">float</span> checker <span class="token operator">=</span> <span class="token function">mod</span><span class="token punctuation">(</span><span class="token function">floor</span><span class="token punctuation">(</span>vUv<span class="token punctuation">.</span>x <span class="token operator">*</span> <span class="token number">10.0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">floor</span><span class="token punctuation">(</span>vUv<span class="token punctuation">.</span>y <span class="token operator">*</span> <span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    outColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span>checker<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h2 id="next-steps">Next Steps</h2> <ul><li>Explore shadertoy.com for inspiration</li> <li>Learn Signed Distance Fields (SDFs) for ray marching</li> <li>Experiment with post-processing effects</li> <li>Study advanced techniques like parallax mapping and normal mapping</li></ul> <hr/> <p><em>Have you created interesting shaders? Share your experiments in the comments below!</em></p>`);
}
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _025_02_shaders_explained_md,
  metadata: metadata$2
}, Symbol.toStringTag, { value: "Module" }));
const metadata$1 = {
  "title": "Functional Programming: Simple Concepts, Powerful Results",
  "date": "2025-02-15",
  "author": "Andrey Golovin",
  "category": "programming",
  "tags": ["functional-programming", "javascript", "best-practices"],
  "published": true,
  "featured": false,
  "excerpt": "Discover how functional programming paradigms can simplify your code and make debugging easier. We'll compare imperative vs functional approaches with real examples.",
  "readingTime": 14
};
const {
  title: title$1,
  date: date$1,
  author: author$1,
  category: category$1,
  tags: tags$1,
  published: published$1,
  featured: featured$1,
  excerpt: excerpt$1,
  readingTime: readingTime$1
} = metadata$1;
function _025_03_functional_programming_md($$renderer) {
  $$renderer.push(`<h1 id="functional-programming-simple-concepts-powerful-results">Functional Programming: Simple Concepts, Powerful Results</h1> <h2 id="why-functional-programming">Why Functional Programming?</h2> <p>In a world of increasingly complex applications, functional programming offers a refreshing approach: <strong>write functions that do one thing, do it well, and compose them together</strong>.</p> <p>The benefits:</p> <ul><li>Easier to test (pure functions have predictable outputs)</li> <li>Easier to reason about (no hidden state mutations)</li> <li>Better code reuse (composable functions)</li> <li>Natural parallelization (no shared mutable state)</li></ul> <h2 id="core-concepts">Core Concepts</h2> <h3 id="1-pure-functions">1. Pure Functions</h3> <p>A pure function always returns the same output for the same input and has no side effects.</p> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// ❌ IMPURE: depends on external state</span>
<span class="token keyword">let</span> multiplier <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> multiplier<span class="token punctuation">;</span>  <span class="token comment">// multiplier could change!</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// ✅ PURE: all inputs as parameters</span>
<span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> multiplier</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> multiplier<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// ❌ IMPURE: modifies external state</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">incrementAge</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    user<span class="token punctuation">.</span>age<span class="token operator">++</span><span class="token punctuation">;</span>  <span class="token comment">// mutation!</span>
    <span class="token keyword">return</span> user<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// ✅ PURE: returns new object</span>
<span class="token keyword">function</span> <span class="token function">incrementAge</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>user<span class="token punctuation">,</span> age<span class="token operator">:</span> user<span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h3 id="2-immutability">2. Immutability</h3> <p>Data never changes; instead, you create new versions with changes applied.</p> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// Arrays</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> modified <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>original<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// [1, 2, 3, 4]</span>
<span class="token keyword">const</span> removed <span class="token operator">=</span> original<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">!==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [1, 3]</span>

<span class="token comment">// Objects</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> olderPerson <span class="token operator">=</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>person<span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">26</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token comment">// Never: person.age = 26  (mutation!)</span>

<span class="token comment">// Deep immutability</span>
<span class="token keyword">const</span> nested <span class="token operator">=</span> <span class="token punctuation">&#123;</span> user<span class="token operator">:</span> <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'Bob'</span> <span class="token punctuation">&#125;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> updated <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token operator">...</span>nested<span class="token punctuation">,</span>
    user<span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>nested<span class="token punctuation">.</span>user<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'Charlie'</span> <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`)}</pre> <h3 id="3-first-class-functions">3. First-Class Functions</h3> <p>Functions are treated as values—pass them around, return them, store them.</p> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// Functions as arguments (callbacks, higher-order functions)</span>
<span class="token keyword">function</span> <span class="token function">applyTwice</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token function">applyTwice</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 20</span>

<span class="token comment">// Returning functions</span>
<span class="token keyword">function</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token parameter">y</span> <span class="token operator">=></span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> add5 <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add5</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 8</span>

<span class="token comment">// Higher-order functions</span>
<span class="token keyword">function</span> <span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">predicate<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>predicate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`)}</pre> <h3 id="4-function-composition">4. Function Composition</h3> <p>Combine simple functions into complex operations.</p> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// The compose utility</span>
<span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fns</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token parameter">x</span> <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Building blocks</span>
<span class="token keyword">const</span> <span class="token function-variable function">double</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">addOne</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">square</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>

<span class="token comment">// Compose them</span>
<span class="token keyword">const</span> operation <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>square<span class="token punctuation">,</span> addOne<span class="token punctuation">,</span> double<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">operation</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// square(addOne(double(3))) = square(addOne(6)) = square(7) = 49</span>

<span class="token comment">// Pipe (left-to-right, more readable)</span>
<span class="token keyword">function</span> <span class="token function">pipe</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fns</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token parameter">x</span> <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> operation2 <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>double<span class="token punctuation">,</span> addOne<span class="token punctuation">,</span> square<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">operation2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// ((3 * 2) + 1) ^ 2 = 49</span></code>`)}</pre> <h2 id="real-world-examples">Real-World Examples</h2> <h3 id="data-transformation-pipeline">Data Transformation Pipeline</h3> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// Typical imperative approach</span>
<span class="token keyword">function</span> <span class="token function">processUsers</span><span class="token punctuation">(</span><span class="token parameter">users</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> users<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>age <span class="token operator">>=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">const</span> processed <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
                <span class="token operator">...</span>user<span class="token punctuation">,</span>
                name<span class="token operator">:</span> user<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                category<span class="token operator">:</span> user<span class="token punctuation">.</span>age <span class="token operator">></span> <span class="token number">65</span> <span class="token operator">?</span> <span class="token string">'senior'</span> <span class="token operator">:</span> <span class="token string">'adult'</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Functional approach</span>
<span class="token keyword">const</span> <span class="token function-variable function">isAdult</span> <span class="token operator">=</span> <span class="token parameter">user</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>age <span class="token operator">>=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">categorizeAge</span> <span class="token operator">=</span> <span class="token parameter">user</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token operator">...</span>user<span class="token punctuation">,</span>
    category<span class="token operator">:</span> user<span class="token punctuation">.</span>age <span class="token operator">></span> <span class="token number">65</span> <span class="token operator">?</span> <span class="token string">'senior'</span> <span class="token operator">:</span> <span class="token string">'adult'</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">uppercaseName</span> <span class="token operator">=</span> <span class="token parameter">user</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token operator">...</span>user<span class="token punctuation">,</span>
    name<span class="token operator">:</span> user<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> processUsers <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>
    <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isAdult<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>uppercaseName<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>categorizeAge<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or chained:</span>
<span class="token keyword">const</span> <span class="token function-variable function">processUsers</span> <span class="token operator">=</span> <span class="token parameter">users</span> <span class="token operator">=></span>
    users
        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isAdult<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>uppercaseName<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>categorizeAge<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`)}</pre> <h3 id="error-handling-with-monads">Error Handling with Monads</h3> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// Simple Result monad</span>
<span class="token keyword">class</span> <span class="token class-name">Result</span> <span class="token punctuation">&#123;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> isError <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isError <span class="token operator">=</span> isError<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">static</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">static</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isError <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> Result<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isError <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token function">getOrElse</span><span class="token punctuation">(</span><span class="token parameter">defaultValue</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isError <span class="token operator">?</span> defaultValue <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Usage</span>
<span class="token keyword">const</span> <span class="token function-variable function">divideBy</span> <span class="token operator">=</span> <span class="token parameter">divisor</span> <span class="token operator">=></span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>divisor <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Result<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Division by zero'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Result<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>value <span class="token operator">/</span> divisor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> Result<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token function">divideBy</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token function">divideBy</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">getOrElse</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 7.5</span>

<span class="token comment">// With error</span>
<span class="token keyword">const</span> badResult <span class="token operator">=</span> Result<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token function">divideBy</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// error!</span>
    <span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token function">divideBy</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// skipped</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>badResult<span class="token punctuation">.</span><span class="token function">getOrElse</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 0</span></code>`)}</pre> <h3 id="currying-and-partial-application">Currying and Partial Application</h3> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// Currying: function takes one argument, returns function waiting for next</span>
<span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">>=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>nextArgs</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>nextArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token keyword">const</span> curriedAdd <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curriedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 6</span>
<span class="token function">curriedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 6</span>
<span class="token function">curriedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 6</span>

<span class="token comment">// Practical: API request builder</span>
<span class="token keyword">const</span> fetchUser <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">baseUrl<span class="token punctuation">,</span> userId<span class="token punctuation">,</span> token</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>baseUrl<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>userId<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
        headers<span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token string">'Authorization'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>token<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fetchFromApi <span class="token operator">=</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fetchUser123 <span class="token operator">=</span> <span class="token function">fetchFromApi</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">fetchUser123</span><span class="token punctuation">(</span><span class="token string">'my-token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`)}</pre> <h2 id="immutable-data-structures">Immutable Data Structures</h2> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// Using Immer for immutability</span>
<span class="token keyword">import</span> produce <span class="token keyword">from</span> <span class="token string">'immer'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    users<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span> posts<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'Hello'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span> <span class="token punctuation">&#125;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token comment">// Clean, readable mutation-like syntax</span>
<span class="token comment">// Immer ensures immutability under the hood</span>
<span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token function">produce</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token parameter">draft</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    draft<span class="token punctuation">.</span>users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'World'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state <span class="token operator">===</span> newState<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false (new object)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> newState<span class="token punctuation">.</span>users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span></code>`)}</pre> <h2 id="avoiding-common-pitfalls">Avoiding Common Pitfalls</h2> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// ❌ Don't: overly nested compositions</span>
<span class="token function">pipe</span><span class="token punctuation">(</span>
    <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ✅ Do: break it into readable steps</span>
<span class="token keyword">const</span> <span class="token function-variable function">filterLarge</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">doubleAll</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pipeline <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>filterLarge<span class="token punctuation">,</span> doubleAll<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ❌ Don't: lose context with arrow functions</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, I'm </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// ✅ works due to arrow fn</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token comment">// ❌ Don't: forget that FP still needs statements</span>
<span class="token keyword">const</span> <span class="token function-variable function">result</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'big'</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">'small'</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token comment">// ✅ Do: or use ternary for simple cases</span>
<span class="token keyword">const</span> <span class="token function-variable function">result</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">></span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'big'</span> <span class="token operator">:</span> <span class="token string">'small'</span><span class="token punctuation">;</span></code>`)}</pre> <h2 id="functional-javascript-patterns-in-practice">Functional JavaScript Patterns in Practice</h2> <h3 id="redux--state-management">Redux / State Management</h3> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// Pure reducer</span>
<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">&#123;</span> count<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">counterReducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">case</span> <span class="token string">'INCREMENT'</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> count<span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">'ADD'</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> count<span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> action<span class="token punctuation">.</span>payload <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Composable action creators</span>
<span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span> type<span class="token operator">:</span> <span class="token string">'INCREMENT'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token parameter">payload</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span> type<span class="token operator">:</span> <span class="token string">'ADD'</span><span class="token punctuation">,</span> payload <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`)}</pre> <h3 id="react-with-functional-patterns">React with Functional Patterns</h3> <pre class="language-javascript">${html(`<code class="language-javascript"><span class="token comment">// Composition over inheritance</span>
<span class="token keyword">const</span> <span class="token function-variable function">withLogging</span> <span class="token operator">=</span> <span class="token parameter">Component</span> <span class="token operator">=></span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Mounted: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>Component<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">&#123;</span><span class="token operator">...</span>props<span class="token punctuation">&#125;</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token comment">// Pure components are naturally testable</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserCard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> user<span class="token punctuation">,</span> onDelete <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token punctuation">&#123;</span>user<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onDelete</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token operator">></span>Delete<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Testing is trivial</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'calls onDelete when clicked'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> mock <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>UserCard user<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'Test'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span> onDelete<span class="token operator">=</span><span class="token punctuation">&#123;</span>mock<span class="token punctuation">&#125;</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'Delete'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mock<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`)}</pre> <h2 id="conclusion">Conclusion</h2> <p>Functional programming isn’t about using <code>map</code>, <code>filter</code>, and <code>reduce</code> everywhere. It’s about:</p> <ol><li><strong>Thinking in transformations</strong> - data flows through functions</li> <li><strong>Avoiding side effects</strong> - pure functions are predictable</li> <li><strong>Composing small pieces</strong> - complex logic from simple building blocks</li> <li><strong>Embracing immutability</strong> - no hidden state changes</li></ol> <p>Start small: write pure functions, use <code>const</code>, and compose where it makes sense. You don’t need to go all-in functional to reap the benefits.</p> <h3 id="further-resources">Further Resources</h3> <ul><li>“Composing Software” by Eric Elliott</li> <li>RxJS for reactive functional programming</li> <li>Ramda.js for functional utilities</li> <li>Clojure/Haskell to learn “pure” functional languages</li></ul> <hr/> <p><em>How do you use functional programming in your projects? Share your patterns in the comments!</em></p>`);
}
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _025_03_functional_programming_md,
  metadata: metadata$1
}, Symbol.toStringTag, { value: "Module" }));
const metadata = {
  "title": "New Beginnings: Why I Rewrote My Portfolio",
  "date": "2025-02-20",
  "author": "Andrey Golovin",
  "category": "meta",
  "tags": ["portfolio", "web-development", "svelte", "threejs"],
  "published": true,
  "featured": true,
  "excerpt": "Behind the scenes: the journey of redesigning this portfolio from scratch, lessons learned, and what's coming next.",
  "readingTime": 10
};
const {
  title,
  date,
  author,
  category,
  tags,
  published,
  featured,
  excerpt,
  readingTime
} = metadata;
function _025_04_new_beginnings_md($$renderer) {
  $$renderer.push(`<h1 id="new-beginnings-why-i-rewrote-my-portfolio">New Beginnings: Why I Rewrote My Portfolio</h1> <h2 id="the-old-portfolio">The Old Portfolio</h2> <h3 id="was-such-a-designer-webiste">Was such a designer webiste<br/></h3> <ul><li>some</li> <li>other</li> <li>point</li> <li>really</li></ul> <p>Was such a designer webiste<br/></p> <hr/> <h3 id="the-new-portfolio">The New Portfolio</h3> <p>Is more optimized for a blog<br/> themed like comfortable reader theme with a little 3d effect<br/></p> <hr/> <h3 id="the-new-portfolio-1">The New Portfolio</h3> <p>Is more optimized for a blog<br/> themed like comfortable reader theme with a little 3d effect<br/></p> <br/>`);
}
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _025_04_new_beginnings_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_1_3 as _,
  __vite_glob_1_2 as a,
  __vite_glob_1_1 as b,
  __vite_glob_1_0 as c
};
