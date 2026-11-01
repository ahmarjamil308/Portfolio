import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function About3DCanvas() {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 300;
    const height = mount.clientHeight || 340;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Main 3D group
    const crystalGroup = new THREE.Group();
    scene.add(crystalGroup);

    // 1. Outer Wireframe Cube
    const boxGeo = new THREE.BoxGeometry(60, 60, 60);
    const boxWire = new THREE.WireframeGeometry(boxGeo);
    const boxMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65
    });
    const boxMesh = new THREE.LineSegments(boxWire, boxMat);
    crystalGroup.add(boxMesh);

    // 2. Inner Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(36, 0);
    const icoWire = new THREE.WireframeGeometry(icoGeo);
    const icoMat = new THREE.LineBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.75
    });
    const icoMesh = new THREE.LineSegments(icoWire, icoMat);
    crystalGroup.add(icoMesh);

    // 3. Inner glowing crystal core
    const coreGeo = new THREE.OctahedronGeometry(20, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    crystalGroup.add(coreMesh);

    // 4. Orbiting satellite particles
    const orbitGroup = new THREE.Group();
    crystalGroup.add(orbitGroup);

    const orbitPointsCount = 40;
    const orbitPointsGeo = new THREE.BufferGeometry();
    const orbitPos = new Float32Array(orbitPointsCount * 3);

    for (let i = 0; i < orbitPointsCount; i++) {
      const angle = (i / orbitPointsCount) * Math.PI * 2;
      const radius = 52;
      orbitPos[i * 3] = Math.cos(angle) * radius;
      orbitPos[i * 3 + 1] = Math.sin(angle) * radius;
      orbitPos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    orbitPointsGeo.setAttribute('position', new THREE.BufferAttribute(orbitPos, 3));
    const orbitPointsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 3.5,
      transparent: true,
      opacity: 0.9
    });
    const orbitPoints = new THREE.Points(orbitPointsGeo, orbitPointsMat);
    orbitGroup.add(orbitPoints);

    // Inertia & drag rotation state
    let rotVelocityX = 0;
    let rotVelocityY = 0;

    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      setHintVisible(false);
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;

      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      rotVelocityY = deltaX * 0.008;
      rotVelocityX = deltaY * 0.008;

      crystalGroup.rotation.y += rotVelocityY;
      crystalGroup.rotation.x += rotVelocityX;

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
        setHintVisible(false);
      }
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;

      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      rotVelocityY = deltaX * 0.008;
      rotVelocityX = deltaY * 0.008;

      crystalGroup.rotation.y += rotVelocityY;
      crystalGroup.rotation.x += rotVelocityX;

      previousMousePositionRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    mount.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isDraggingRef.current) {
        // Natural continuous 3D spin + inertia damping
        crystalGroup.rotation.y += 0.012 + rotVelocityY;
        crystalGroup.rotation.x += 0.008 + rotVelocityX;
        rotVelocityX *= 0.95;
        rotVelocityY *= 0.95;
      }

      // Internal counter-rotations
      icoMesh.rotation.y -= 0.02;
      coreMesh.rotation.x += 0.025;
      orbitGroup.rotation.z += 0.015;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      mount.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);

      boxGeo.dispose();
      boxWire.dispose();
      boxMat.dispose();
      icoGeo.dispose();
      icoWire.dispose();
      icoMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      orbitPointsGeo.dispose();
      orbitPointsMat.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="about-3d-crystal-wrapper">
      <div ref={mountRef} className="about-3d-webgl-mount" />
      {hintVisible && (
        <span className="drag-hint-badge">
          ✦ Drag to rotate in 3D ✦
        </span>
      )}
    </div>
  );
}

