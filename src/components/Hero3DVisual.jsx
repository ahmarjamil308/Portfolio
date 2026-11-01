import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DVisual() {
  const mountRef = useRef(null);
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const manualRotRef = useRef({ x: 0, y: 0 });
  const manualVelRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 380;
    const height = mount.clientHeight || 380;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for all rotating 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Gyroscopic Outer Ring 1 (Neon Cyan)
    const ring1Geo = new THREE.TorusGeometry(85, 1.5, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.75
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    mainGroup.add(ring1);

    // 2. Gyroscopic Middle Ring 2 (Neon Purple)
    const ring2Geo = new THREE.TorusGeometry(100, 1.4, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.65
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    mainGroup.add(ring2);

    // 3. Gyroscopic Outermost Ring 3 (Electric Pink / Violet)
    const ring3Geo = new THREE.TorusGeometry(115, 1.2, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.5
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    mainGroup.add(ring3);

    // 4. Orbiting Glowing Nodes on Rings
    const nodeGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const nodeMatCyan = new THREE.MeshBasicMaterial({ color: 0x67e8f9 });
    const nodeMatPurple = new THREE.MeshBasicMaterial({ color: 0xc084fc });
    const nodeMatPink = new THREE.MeshBasicMaterial({ color: 0xec4899 });

    const node1 = new THREE.Mesh(nodeGeo, nodeMatCyan);
    const node2 = new THREE.Mesh(nodeGeo, nodeMatPurple);
    const node3 = new THREE.Mesh(nodeGeo, nodeMatPink);
    mainGroup.add(node1);
    mainGroup.add(node2);
    mainGroup.add(node3);

    // 5. Orbiting 3D Particle Halo around photo
    const haloParticleCount = 90;
    const haloPos = new Float32Array(haloParticleCount * 3);
    for (let i = 0; i < haloParticleCount; i++) {
      const angle = (i / haloParticleCount) * Math.PI * 2;
      const radius = 72 + (Math.random() - 0.5) * 16;
      haloPos[i * 3] = Math.cos(angle) * radius;
      haloPos[i * 3 + 1] = Math.sin(angle) * radius;
      haloPos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    const haloGeo = new THREE.BufferGeometry();
    haloGeo.setAttribute('position', new THREE.BufferAttribute(haloPos, 3));
    const haloMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 2.8,
      transparent: true,
      opacity: 0.85
    });
    const haloParticles = new THREE.Points(haloGeo, haloMat);
    mainGroup.add(haloParticles);

    // 6. Subtle Wireframe Core Sphere
    const sphereGeo = new THREE.SphereGeometry(68, 18, 18);
    const sphereWire = new THREE.WireframeGeometry(sphereGeo);
    const sphereMat = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2
    });
    const wireSphere = new THREE.LineSegments(sphereWire, sphereMat);
    mainGroup.add(wireSphere);

    // Mouse tracking & Drag rotation inside Hero visual
    let targetRotX = 0;
    let targetRotY = 0;

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Gyroscope rotation
      ring1.rotation.x = time * 0.45;
      ring1.rotation.y = time * 0.35;

      ring2.rotation.y = time * -0.55;
      ring2.rotation.z = time * 0.25;

      ring3.rotation.z = time * 0.3;
      ring3.rotation.x = time * -0.4;

      haloParticles.rotation.z = time * 0.35;
      haloParticles.rotation.y = Math.sin(time * 0.4) * 0.25;

      // Orbiting nodes position
      const r1 = 85;
      node1.position.set(
        Math.cos(time * 1.5) * r1,
        Math.sin(time * 1.5) * r1,
        Math.sin(time * 1.2) * 20
      );

      const r2 = 100;
      node2.position.set(
        Math.sin(time * -1.2) * r2,
        Math.cos(time * -1.2) * 30,
        Math.cos(time * -1.2) * r2
      );

      const r3 = 115;
      node3.position.set(
        Math.cos(time * 1.8) * 25,
        Math.sin(time * 1.8) * r3,
        Math.cos(time * 1.8) * r3
      );

      wireSphere.rotation.y = time * 0.2;
      wireSphere.rotation.x = Math.sin(time * 0.3) * 0.2;

      // Inertia & Manual Drag application
      if (!isDraggingRef.current) {
        manualRotRef.current.x += manualVelRef.current.x;
        manualRotRef.current.y += manualVelRef.current.y;
        manualVelRef.current.x *= 0.95;
        manualVelRef.current.y *= 0.95;
      }

      // Smoothly blend mouse hover tilt + manual drag
      mainGroup.rotation.y = manualRotRef.current.y + targetRotY;
      mainGroup.rotation.x = manualRotRef.current.x + targetRotX;

      renderer.render(scene, camera);
    };

    animate();

    // Drag to spin listeners
    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - prevMouseRef.current.x;
      const dy = e.clientY - prevMouseRef.current.y;

      manualVelRef.current.y = dx * 0.008;
      manualVelRef.current.x = dy * 0.008;

      manualRotRef.current.y += manualVelRef.current.y;
      manualRotRef.current.x += manualVelRef.current.x;

      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);

      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      nodeGeo.dispose();
      nodeMatCyan.dispose();
      nodeMatPurple.dispose();
      nodeMatPink.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      sphereGeo.dispose();
      sphereWire.dispose();
      sphereMat.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleCardMouseMove = (e) => {
    if (!cardRef.current || isDraggingRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 14;
    const rotY = (x / (rect.width / 2)) * 14;
    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`hero-visual-3d-wrap ${isHovered ? 'hovered' : ''}`}
      onMouseMove={handleCardMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
    >
      {/* 3D WebGL Canvas Layer */}
      <div ref={mountRef} className="hero-webgl-canvas" />

      {/* Futuristic Cyber Frame & Corner Brackets */}
      <div className="cyber-corner corner-tl" />
      <div className="cyber-corner corner-tr" />
      <div className="cyber-corner corner-bl" />
      <div className="cyber-corner corner-br" />

      {/* Centered Holographic Photo Frame */}
      <div className="profile-hologram-center">
        <div className="hologram-halo" />
        <div className="hologram-ring" />
        <img
          src="/images/ahmar-jamil.jpg"
          alt="Ahmar Jamil - Software Developer"
          className="profile-hologram-photo"
        />
        <div className="hologram-scanline" />
      </div>

      {/* Floating 3D Interactive Tech Pills */}
      <div className="floating-3d-badge badge-flutter">
        <span className="badge-dot dot-cyan" />
        <div>
          <strong>Flutter & Dart</strong>
          <small>Cross-platform</small>
        </div>
      </div>

      <div className="floating-3d-badge badge-react">
        <span className="badge-dot dot-purple" />
        <div>
          <strong>Full-Stack MERN</strong>
          <small>React · Node · Mongo</small>
        </div>
      </div>

      <div className="floating-3d-badge badge-python">
        <span className="badge-dot dot-pink" />
        <div>
          <strong>Python & C++</strong>
          <small>Logic & DSA</small>
        </div>
      </div>

      {/* Status Live Indicator */}
      <div className="hologram-status">
        <span className="live-pulse" />
        <span>3D INTERACTIVE MATRIX</span>
      </div>
    </div>
  );
}
