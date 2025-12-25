// 1. Create Canvas and Get WebGL Context
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

if (!gl) {
  alert('WebGL not supported by your browser!');
  throw new Error('WebGL not supported');
}

// 2. Add canvas to the body and style it to be a background
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1'; // Place it behind everything

// 3. Function to resize canvas to full window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial resize

// 4. Create Shaders (Example: Animated Gradient)
const vsSource = `
    attribute vec2 aPosition;
    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;
// A simple fragment shader that creates an animated gradient
const fsSource = `
    precision mediump float;
    uniform float uTime;
    uniform vec2 uResolution;

    void main() {
        vec2 uv = gl_FragCoord.xy / uResolution;
        
        // Create a color that changes with time and position
        vec3 color = 0.5 + 0.5 * cos(uTime + uv.xyx + vec3(0, 2, 4));
        
        gl_FragColor = vec4(color, 1.0);
    }
`;

// 5. Helper functions to compile shader and create program
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vertexSource, fragmentSource) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program linking error:', gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

// 6. Create the WebGL program
const program = createProgram(gl, vsSource, fsSource);
gl.useProgram(program);

// 7. Set up a full-screen quad (two triangles)
const positions = new Float32Array([
  -1.0, -1.0,
  1.0, -1.0,
  -1.0, 1.0,
  -1.0, 1.0,
  1.0, -1.0,
  1.0, 1.0
]);
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

const aPosition = gl.getAttribLocation(program, 'aPosition');
gl.enableVertexAttribArray(aPosition);
gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

// 8. Get uniform locations
const uTimeLocation = gl.getUniformLocation(program, 'uTime');
const uResolutionLocation = gl.getUniformLocation(program, 'uResolution');

// 9. Render loop
let startTime = Date.now();

function render() {
  const currentTime = (Date.now() - startTime) / 1000; // Convert to seconds

  // Set uniforms
  gl.uniform1f(uTimeLocation, currentTime);
  gl.uniform2f(uResolutionLocation, gl.canvas.width, gl.canvas.height);

  // Clear and draw
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6); // Draw the 6 vertices (2 triangles)

  requestAnimationFrame(render);
}

// 10. Start the animation
render();
