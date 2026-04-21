import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, TorusKnot, Sparkles } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function MorphKnot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.18;
    ref.current.rotation.y = t * 0.25;
    // subtle mouse-influenced tilt
    const { x, y } = state.pointer;
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, x * 0.4, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y * 0.3, 0.05);
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <TorusKnot ref={ref} args={[1.1, 0.34, 220, 32]}>
        {/* @ts-ignore distort props */}
        <MeshDistortMaterial
          color="#1e90ff"
          emissive="#0a4fbf"
          emissiveIntensity={0.6}
          metalness={0.85}
          roughness={0.18}
          distort={0.38}
          speed={1.6}
        />
      </TorusKnot>
    </Float>
  );
}

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.2;
  });
  return (
    <mesh ref={ref} position={[0, 0, -1.2]}>
      <torusGeometry args={[2.3, 0.012, 16, 200]} />
      <meshBasicMaterial color="#7dd3fc" transparent opacity={0.55} />
    </mesh>
  );
}

export const HeroScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <directionalLight position={[3, 4, 5]} intensity={1.2} color="#bae6fd" />
          <pointLight position={[-4, -2, -3]} intensity={1.6} color="#3b82f6" />
          <pointLight position={[4, 2, 2]} intensity={1.1} color="#0ea5e9" />
          <MorphKnot />
          <GlowRing />
          <Sparkles count={60} scale={6} size={2.5} speed={0.5} color="#7dd3fc" opacity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
};
