---
title: "Shaders 101: How They Transform Your Graphics"
date: "2025-02-01"
author: "Andrey Golovin"
category: "graphics"
tags: ["shaders", "webgl", "glsl"]
published: true
featured: true
excerpt: "A comprehensive guide to understanding shaders, from vertex to fragment processing, with interactive examples and real-world applications."
readingTime: 15
---

# Shaders 101: How They Transform Your Graphics

## What Are Shaders?

Shaders are specialized programs that run on your GPU to calculate rendering effects on a per-pixel (fragment shader) or per-vertex (vertex shader) basis. They're the secret sauce behind stunning graphics in games, web applications, and creative projects.

Think of a shader as a function that gets called millions of times per frame—once for every pixel or vertex on screen.

## The Shader Pipeline
## Vertex Shaders

Vertex shaders process each vertex of your geometry independently.

### Basic Vertex Shader Example
```glsl
#version 300 es

in vec3 position;
in vec3 normal;

uniform mat4 uMatrix;
uniform mat4 uNormalMatrix;

out vec3 vNormal;
out vec3 vPosition;

void main() {
    // Transform vertex position
    vec4 worldPosition = uMatrix * vec4(position, 1.0);
    gl_Position = worldPosition;
    
    // Transform normal for lighting
    vNormal = normalize(vec3(uNormalMatrix * vec4(normal, 0.0)));
    vPosition = worldPosition.xyz;
}
```

### Common Vertex Operations
```glsl
// Wave deformation
void main() {
    vec3 pos = position;
    pos.y += sin(pos.x + uTime) * 0.5;
    gl_Position = uMatrix * vec4(pos, 1.0);
}

// Vertex displacement along normal
void main() {
    vec3 displaced = position + normal * sin(uTime) * 0.1;
    gl_Position = uMatrix * vec4(displaced, 1.0);
}

// Procedural animation
void main() {
    vec3 pos = position;
    float wave = sin(uTime + pos.z * 5.0) * 0.3;
    pos.x += wave;
    gl_Position = uMatrix * vec4(pos, 1.0);
}
```

## Fragment Shaders

Fragment shaders determine the color of each pixel. This is where the visual magic happens.

### Basic Fragment Shader
```glsl
#version 300 es
precision mediump float;

uniform sampler2D uTexture;
uniform float uTime;

in vec2 vUv;
in vec3 vNormal;

out vec4 outColor;

void main() {
    vec3 normal = normalize(vNormal);
    
    // Simple lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float light = dot(normal, lightDir) * 0.5 + 0.5;
    
    // Sample texture
    vec4 texColor = texture(uTexture, vUv);
    
    // Combine
    outColor = texColor * vec4(vec3(light), 1.0);
}
```

### Creative Fragment Effects

#### 1. Animated Gradient
```glsl
void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec3 color = 0.5 + 0.5 * cos(iTime + uv.xyx + vec3(0, 2, 4));
    outColor = vec4(color, 1.0);
}
```

#### 2. Voronoi Noise
```glsl
float voronoi(vec2 uv) {
    vec2 iuv = floor(uv);
    vec2 fuv = fract(uv);
    
    float minDist = 1.0;
    
    for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
            vec2 neighbor = vec2(float(x), float(y));
            vec2 point = sin(iuv + neighbor) * 0.5 + 0.5;
            float dist = length(fuv - neighbor - point);
            minDist = min(minDist, dist);
        }
    }
    
    return minDist;
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float v = voronoi(uv * 5.0);
    outColor = vec4(vec3(v), 1.0);
}
```

#### 3. Procedural Marble
```glsl
float noise(vec2 uv) {
    return sin(uv.x * 10.0) * sin(uv.y * 10.0);
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    
    float n = 0.0;
    for (int i = 0; i < 5; i++) {
        float freq = pow(2.0, float(i));
        n += noise(uv * freq) / freq;
    }
    
    float pattern = sin(uv.x * 10.0 + n * 5.0) * 0.5 + 0.5;
    outColor = vec4(vec3(pattern), 1.0);
}
```

## Implementing Shaders in WebGL/Three.js

### Using Three.js ShaderMaterial
```javascript
const vertexShader = `
    varying vec2 vUv;
    
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    
    void main() {
        vec3 color = 0.5 + 0.5 * cos(uTime + vUv.xyx + vec3(0, 2, 4));
        gl_FragColor = vec4(color, 1.0);
    }
`;

const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
        uTime: { value: 0 }
    }
});

// Update uniforms in animation loop
function animate() {
    material.uniforms.uTime.value = Date.now() * 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
```

## Common Shader Patterns

### 1. UV Manipulation
```glsl
// Tile pattern
void main() {
    vec2 uv = fract(vUv * 5.0);
    outColor = texture(uTexture, uv);
}

// Radial coordinates
void main() {
    vec2 center = vUv - 0.5;
    float angle = atan(center.y, center.x);
    float dist = length(center);
    outColor = vec4(vec3(angle / 6.28, dist, 0.5), 1.0);
}
```

### 2. Lighting Models
```glsl
// Phong lighting
vec3 phong(vec3 normal, vec3 lightDir, vec3 viewDir) {
    // Ambient
    vec3 ambient = vec3(0.2);
    
    // Diffuse
    float diff = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = diff * vec3(1.0);
    
    // Specular
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
    vec3 specular = spec * vec3(1.0);
    
    return ambient + diffuse + specular;
}
```

### 3. Displacement Mapping
```glsl
uniform sampler2D uDisplacement;
uniform float uStrength;

void main() {
    vec4 displacement = texture(uDisplacement, vUv);
    vec3 newPos = position + normal * displacement.r * uStrength;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}
```

## Performance Tips

1. **Minimize branching** - Conditionals are expensive on GPUs
2. **Use vec4 operations** - Take advantage of parallel processing
3. **Avoid expensive functions** - sin, cos are relatively slow
4. **Pre-compute when possible** - Calculate outside shader, pass as uniform
5. **Use appropriate precision** - `lowp` for mobile, `mediump` for mid-range

## Common Mistakes to Avoid
```glsl
// ❌ SLOW: Loop with dynamic iterations
for (int i = 0; i < int(uCount); i++) { }

// ✅ FAST: Fixed loop count
for (int i = 0; i < 10; i++) { }

// ❌ SLOW: Complex branching
if (condition1) { ... } else if (condition2) { ... } else { ... }

// ✅ FAST: Use mix() and step() functions
float result = mix(a, b, step(threshold, value));

// ❌ SLOW: Recalculating same value
float val1 = expensive_function();
float val2 = expensive_function();

// ✅ FAST: Calculate once, reuse
float val = expensive_function();
float val1 = val;
float val2 = val;
```

## Debugging Shaders
```glsl
// Visualize normals
void main() {
    outColor = vec4(vNormal * 0.5 + 0.5, 1.0);
}

// Visualize UVs
void main() {
    outColor = vec4(vUv, 0.0, 1.0);
}

// Show depth
void main() {
    outColor = vec4(vec3(gl_FragCoord.z), 1.0);
}

// Checkerboard for debugging
void main() {
    float checker = mod(floor(vUv.x * 10.0) + floor(vUv.y * 10.0), 2.0);
    outColor = vec4(vec3(checker), 1.0);
}
```

## Next Steps

- Explore shadertoy.com for inspiration
- Learn Signed Distance Fields (SDFs) for ray marching
- Experiment with post-processing effects
- Study advanced techniques like parallax mapping and normal mapping

---

*Have you created interesting shaders? Share your experiments in the comments below!*
