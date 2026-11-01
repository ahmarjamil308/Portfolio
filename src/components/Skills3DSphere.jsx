import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const skillsList = [
  { name: 'React.js', color: '#38bdf8' },
  { name: 'Flutter', color: '#38bdf8' },
  { name: 'Node.js', color: '#a855f7' },
  { name: 'Three.js', color: '#ec4899' },
  { name: 'Python', color: '#facc15' },
  { name: 'MongoDB', color: '#10b981' },
  { name: 'C++', color: '#3b82f6' },
  { name: 'Firebase', color: '#f97316' },
  { name: 'Dart', color: '#06b6d4' },
  { name: 'Express.js', color: '#c084fc' },
  { name: 'JavaScript', color: '#fde047' },
  { name: 'Git & GitHub', color: '#f43f5e' },
  { name: 'REST APIs', color: '#34d399' },
  { name: 'Django', color: '#059669' },
  { name: 'TailwindCSS', color: '#38bdf8' },
  { name: 'Framer Motion', color: '#ec4899' },
  { name: 'HTML5/CSS3', color: '#fb923c' },
  { name: 'OOP & DSA', color: '#818cf8' }
];

export default function Skills3DSphere() {
  const containerRef = useRef(null);
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [tagPositions, setTagPositions] = useState([]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 380;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
    camera.position.z = 260;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for the 3D sphere
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // 1. Wireframe sphere geometry
    const sphereGeo = new THREE.SphereGeometry(95, 14, 14);
    const sphereWire = new THREE.WireframeGeometry(sphereGeo);
    const sphereMat = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.18
    });
    const wireSphere = new THREE.LineSegments(sphereWire, sphereMat);
    sphereGroup.add(wireSphere);

    // 2. Equatorial cyber ring
    const ringGeo = new THREE.TorusGeometry(105, 1.2, 16, 60);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4
    });
    const cyberRing = new THREE.Mesh(ringGeo, ringMat);
    cyberRing.rotation.x = Math.PI / 2;
    sphereGroup.add(cyberRing);

    // 3. Polar ring
    const polarRing = new THREE.Mesh(ringGeo, ringMat);
    polarRing.rotation.y = Math.PI / 2;
    sphereGroup.add(polarRing);

    // 4. Calculate Fibonacci 3D coordinates for skill tags
    const radius = 100;
    const count = skillsList.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    const nodeObjects = [];

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // 3D vector
      const vec = new THREE.Vector3(x * radius, y * radius, z * radius);

      // Create glowing node point in 3D
      const dotGeo = new THREE.SphereGeometry(2.5, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(skillsList[i].color)
      });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(vec);
      sphereGroup.add(dotMesh);

      nodeObjects.push({ vec, dotMesh, skill: skillsList[i] });
    }

    // Drag & mouse velocity
    let rotX = 0;
    let rotY = 0;
    let velX = 0.006;
    let velY = 0.008;

    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - mousePosRef.current.x;
      const dy = e.clientY - mousePosRef.current.y;

      velY = dx * 0.005;
      velX = dy * 0.005;

      sphereGroup.rotation.y += velY;
      sphereGroup.rotation.x += velX;

      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        mousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - mousePosRef.current.x;
      const dy = e.touches[0].clientY - mousePosRef.current.y;

      velY = dx * 0.005;
      velX = dy * 0.005;

      sphereGroup.rotation.y += velY;
      sphereGroup.rotation.x += velX;

      mousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    mount.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isDraggingRef.current) {
        sphereGroup.rotation.y += velY;
        sphereGroup.rotation.x += velX;
        velX *= 0.98;
        velY *= 0.98;
        // Keep minimum baseline gentle rotation
        if (Math.abs(velY) < 0.004) velY = 0.004;
      }

      // Update 2D screen projections for skill tags
      const currentPositions = nodeObjects.map(({ dotMesh, skill }) => {
        const worldPos = new THREE.Vector3();
        dotMesh.getWorldPosition(worldPos);

        const projected = worldPos.clone().project(camera);
        const screenX = ((projected.x + 1) * width) / 2;
        const screenY = ((-projected.y + 1) * height) / 2;

        // Depth factor (z goes from ~ -1 to 1 in normalized device coords)
        const depth = projected.z;
        const scale = THREE.MathUtils.lerp(1.15, 0.65, (depth + 1) / 2);
        const opacity = THREE.MathUtils.lerp(1, 0.25, (depth + 1) / 2);
        const zIndex = Math.round((1 - depth) * 100);

        return {
          name: skill.name,
          color: skill.color,
          x: screenX,
          y: screenY,
          scale,
          opacity,
          zIndex
        };
      });

      setTagPositions(currentPositions);
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

      sphereGeo.dispose();
      sphereWire.dispose();
      sphereMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="skills-3d-sphere-container">
      {/* 3D WebGL Canvas Layer */}
      <div ref={mountRef} className="skills-webgl-mount" />

      {/* Real-time 3D projected floating skill tags */}
      <div className="skills-projected-tags-layer" aria-hidden="true">
        {tagPositions.map((tag) => (
          <span
            key={tag.name}
            className="sphere-tag-pill"
            style={{
              transform: `translate3d(${tag.x}px, ${tag.y}px, 0) translate(-50%, -50%) scale(${tag.scale})`,
              opacity: tag.opacity,
              zIndex: tag.zIndex,
              borderColor: `${tag.color}40`,
              boxShadow: `0 0 10px ${tag.color}25`
            }}
          >
            <span
              className="tag-glow-dot"
              style={{ backgroundColor: tag.color, boxShadow: `0 0 6px ${tag.color}` }}
            />
            {tag.name}
          </span>
        ))}
      </div>

      <div className="sphere-interactive-footer">
        <span className="sphere-orbit-hint">
          ✦ Interactive 3D Tech Orbit · Click & Drag to Spin ✦
        </span>
      </div>
    </div>
  );
}

