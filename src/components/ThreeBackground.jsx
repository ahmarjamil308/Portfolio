import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070712, 0.00075);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2500
    );
    camera.position.z = 720;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Dynamic 3D Cursor PointLight
    const cursorLight = new THREE.PointLight(0x38bdf8, 2, 800);
    cursorLight.position.set(0, 0, 400);
    scene.add(cursorLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);

    // 3. STARFIELD / PARTICLE GALAXY
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color('#38bdf8'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#818cf8'),
      new THREE.Color('#ec4899'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1900;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1900;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1500;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(255,255,255,0.7)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 4.8,
      map: particleTexture,
      transparent: true,
      opacity: 0.68,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 4. FLOATING WIREFRAME 3D GEOMETRIES
    // Shape 1: Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(75, 1);
    const icoWire = new THREE.WireframeGeometry(icoGeo);
    const icoMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.28
    });
    const icosahedron = new THREE.LineSegments(icoWire, icoMat);
    icosahedron.position.set(380, 80, -200);
    scene.add(icosahedron);

    // Shape 2: Wireframe Torus (Cyber Ring)
    const torusGeo = new THREE.TorusGeometry(80, 24, 16, 60);
    const torusWire = new THREE.WireframeGeometry(torusGeo);
    const torusMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.22
    });
    const torus = new THREE.LineSegments(torusWire, torusMat);
    torus.position.set(-420, -120, -150);
    scene.add(torus);

    // Shape 3: Torus Knot (Complex Cyber Core)
    const knotGeo = new THREE.TorusKnotGeometry(45, 12, 64, 16);
    const knotWire = new THREE.WireframeGeometry(knotGeo);
    const knotMat = new THREE.LineBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.25
    });
    const torusKnot = new THREE.LineSegments(knotWire, knotMat);
    torusKnot.position.set(-360, 260, -220);
    scene.add(torusKnot);

    // Shape 4: Floating Octahedron Crystal
    const octGeo = new THREE.OctahedronGeometry(55, 0);
    const octWire = new THREE.WireframeGeometry(octGeo);
    const octMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.24
    });
    const octahedron = new THREE.LineSegments(octWire, octMat);
    octahedron.position.set(320, -280, -100);
    scene.add(octahedron);

    // 5. 3D CYBER TRON PERSPECTIVE HORIZON GRID WAVE
    const gridPlaneGeo = new THREE.PlaneGeometry(2400, 1800, 40, 30);
    const gridWire = new THREE.WireframeGeometry(gridPlaneGeo);
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.16
    });
    const cyberGrid = new THREE.LineSegments(gridWire, gridMat);
    cyberGrid.rotation.x = -Math.PI / 2.3;
    cyberGrid.position.set(0, -420, -300);
    scene.add(cyberGrid);

    // Mouse & Scroll coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.4;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.4;

      // Update 3D PointLight position matching cursor
      cursorLight.position.x = (e.clientX / window.innerWidth - 0.5) * 800;
      cursorLight.position.y = -(e.clientY / window.innerHeight - 0.5) * 600 - scrollY * 0.2;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', onResize);

    // Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth camera lerp
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        camera.position.x = targetX * 0.35;
        camera.position.y = -targetY * 0.35 - scrollY * 0.22;
        camera.lookAt(0, -scrollY * 0.22, 0);

        // Continuous 3D galaxy drift
        particles.rotation.y = elapsedTime * 0.035;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.08;

        // Floating wireframe geometries
        icosahedron.rotation.x = elapsedTime * 0.18;
        icosahedron.rotation.y = elapsedTime * 0.22;
        icosahedron.position.y = 80 + Math.sin(elapsedTime * 0.8) * 20;

        torus.rotation.x = elapsedTime * 0.14;
        torus.rotation.y = elapsedTime * 0.19;
        torus.position.y = -120 + Math.cos(elapsedTime * 0.7) * 25;

        torusKnot.rotation.x = elapsedTime * 0.16;
        torusKnot.rotation.y = elapsedTime * 0.22;
        torusKnot.position.y = 260 + Math.sin(elapsedTime * 0.6) * 18;

        octahedron.rotation.y = elapsedTime * 0.25;
        octahedron.rotation.z = elapsedTime * 0.15;
        octahedron.position.y = -280 + Math.sin(elapsedTime * 0.9) * 15;

        // Tron grid wave
        cyberGrid.position.z = -300 + ((elapsedTime * 60) % 60);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      icoGeo.dispose();
      icoWire.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusWire.dispose();
      torusMat.dispose();
      knotGeo.dispose();
      knotWire.dispose();
      knotMat.dispose();
      octGeo.dispose();
      octWire.dispose();
      octMat.dispose();
      gridPlaneGeo.dispose();
      gridWire.dispose();
      gridMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="three-canvas-container"
      aria-hidden="true"
    />
  );
}
