---
title: "New Beginnings: Why I Rewrote My Portfolio"
date: "2025-02-20"
author: "Andrey Golovin"
category: "meta"
tags: ["portfolio", "web-development", "svelte", "threejs"]
published: true
featured: true
excerpt: "Behind the scenes: the journey of redesigning this portfolio from scratch, lessons learned, and what's coming next."
readingTime: 10
---

# New Beginnings: Why I Rewrote My Portfolio

## The Old Portfolio
### Was such a designer webiste<br/>

Was such a designer webiste<br/>
![Frame](../../blog/old_blog_1.png)
![Frame](../../blog/old_blog_2.png)
![Frame](../../blog/old_blog_3.png)
<hr/>

i decide  rewrote my webside to latest sveltekit and seperate the three component to be more free, also giving main focus to blog and projects readability

## The New Portfolio
* is mmore like a magic book, with academic style<br/>


Is more optimized for a blog<br/>
![Frame](../../blog/new_blog_1.png)
![Frame](../../blog/new_blog_2.png)
![Frame](../../blog/new_blog_3.png)
themed like comfortable reader theme with a little 3d effect<br/>
<br/>


### How Threejs is mounted:
```javascript

  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import favicon from '$lib/assets/favicon.svg';
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { browser } from '$app/environment';

  let canvasEl = null;
  let cleanup = () => {};

  // Mouse parallax
  let mouseX = 0, mouseY = 0;

  // Safe browser-only setup
  onMount(() => {
    if (!browser || !canvasEl) return;

    const result = initThree(canvasEl);
    cleanup = result.cleanup;

    window.addEventListener('mousemove', onMouseMove);
  });

  onDestroy(() => {
    cleanup();
    if (browser) window.removeEventListener('mousemove', onMouseMove);
  });

  function onMouseMove(e) {
    // normalized [-1,1] small range
    mouseX = (e.clientX / window.innerWidth - 0.5) * -0.8;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
  }
```

```javascript

  function initThree(canvas) {
    let camera, scene, renderer, group, raf;
    const NUM_CUBES = 10;
    const SPREAD_XZ = 35;
    const SPREAD_Y = 115;
    const ROTATION_SPEED = 0.0;
    const CAMERA_Z = 40;
    const FOCAL_LENGTH = 35;
    const cubeSize = 4.5;

    const meshes = [];
    const edgesAll = [];

    let targetCameraY = 0;
    let currentCameraY = 0;
    let currentCameraX = 0;

    function init() {
      scene = new THREE.Scene();

      // Camera with small DOF (simulate via near/far)
      camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 10, 200);
      camera.position.set(0, 0, CAMERA_Z);
      if (typeof camera.setFocalLength === 'function') camera.setFocalLength(FOCAL_LENGTH);

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Lights
      const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 4.6);
      scene.add(hemi);
      const dir = new THREE.DirectionalLight(0xffffff, 0.6);
      dir.position.set(5, 10, 7.5);
      scene.add(dir);

      // Group for cubes
      group = new THREE.Group();
      scene.add(group);

      // Cubes
      for (let i = 0; i < NUM_CUBES; i++) {
        const size = (0.1 + Math.random() * 0.9) * cubeSize;
        const g = new THREE.BoxGeometry(size, size, size);
        const m = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(Math.random() * 0.6 + 0.1, 0.6, 0.5),
          metalness: 0.02 + Math.random() * 0.4,
          roughness: 0.3 + Math.random() * 0.6
        });
        const mesh = new THREE.Mesh(g, m);

        mesh.position.set(
          (Math.random() - 0.5) * SPREAD_XZ,
          (Math.random() - 0.5) * SPREAD_Y,
          (Math.random() - 0.5) * SPREAD_XZ
        );
        mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
        mesh.userData.spin = { x: (Math.random() - 0.5) * 0.4, y: (Math.random() - 0.5) * 0.4 };

        group.add(mesh);
        meshes.push(mesh);

        // Outline
        const oMat = new THREE.MeshBasicMaterial({ color: 0x282828, side: THREE.BackSide });
        const oMesh = new THREE.Mesh(g.clone(), oMat);
        oMesh.scale.setScalar(1.05);
        mesh.add(oMesh);

        // True dashed edges
        const eGeom = new THREE.EdgesGeometry(g);
        const eMat = new THREE.LineDashedMaterial({
          color: 0x343434,
          dashSize: 0.2,
          gapSize: 0.1,
          linewidth: 1
        });
        const lines = new THREE.LineSegments(eGeom, eMat);
        lines.computeLineDistances();
        mesh.add(lines);
        edgesAll.push(lines);
      }

      if (browser) {
        window.addEventListener('resize', onWindowResize, { passive: true });
        window.addEventListener('scroll', onScroll, { passive: true });
        onWindowResize();
        onScroll();
      }
    }

    function onWindowResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h);
    }

    function onScroll() {
      targetCameraY = -window.scrollY * 0.005;
    }

    function animate(t) {
      raf = requestAnimationFrame(animate);
      const time = (t || performance.now()) * 0.001;

      group.rotation.y += 0.0015 * (ROTATION_SPEED * 10);
      group.rotation.x = Math.sin(time * 0.12 * ROTATION_SPEED * 10) * 0.08;

      for (const m of meshes) {
        m.rotation.x += (m.userData.spin?.x || 0) * 0.002 * (ROTATION_SPEED * 10);
        m.rotation.y += (m.userData.spin?.y || 0) * 0.0025 * (ROTATION_SPEED * 10);
      }

      // Camera smoothing
      const damping = 0.035;
      currentCameraY += (targetCameraY - currentCameraY) * damping;

      // Mouse parallax (subtle)
      const parallaxAmplitude = 1.2;
      const targetX = mouseX * parallaxAmplitude;
      const targetY = mouseY * parallaxAmplitude;
      currentCameraX += (targetX - currentCameraX) * damping;
      camera.position.x = currentCameraX;
      camera.position.y = currentCameraY + targetY;

      edgesAll.forEach(l => l.material.needsUpdate = true);

      renderer.render(scene, camera);
    }

    function dispose() {
      cancelAnimationFrame(raf);
      if (browser) {
        window.removeEventListener('resize', onWindowResize);
        window.removeEventListener('scroll', onScroll);
      }

      for (const m of meshes) {
        m.traverse(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) child.material.forEach(mat => mat.dispose());
            else child.material.dispose();
          }
        });
        if (m.parent) m.parent.remove(m);
      }

      if (renderer) {
        renderer.dispose();
        try { renderer.getContext()?.getExtension('WEBGL_lose_context')?.loseContext(); } catch {}
      }
    }

    init();
    animate();
    return { cleanup: dispose };
  }
```
