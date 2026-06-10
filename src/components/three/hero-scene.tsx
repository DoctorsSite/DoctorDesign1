import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.15;
    ref.current.rotation.y += dt * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.6}>
        {/* Reduced from 220 to 128 tubular segments — ~40% fewer vertices */}
        <torusKnotGeometry args={[1, 0.32, 128, 32]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.05}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.06}
          samples={4}
          resolution={128}
          color="#9fd8d4"
          attenuationColor="#f5d68a"
          attenuationDistance={1.4}
        />
      </mesh>
    </Float>
  );
}

function Orb({ position, color, scale = 0.5 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={0.8} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        {/* Reduced from 64 to 32 segments — 75% fewer vertices */}
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.4} emissive={color} emissiveIntensity={0.15} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#f5d68a" />
        <directionalLight position={[-5, -3, 2]} intensity={0.8} color="#7fc8c4" />
        <Knot />
        <Orb position={[-2.6, 1.4, -1]} color="#7fc8c4" scale={0.35} />
        <Orb position={[2.4, -1.6, -0.5]} color="#f5d68a" scale={0.45} />
        {/* Reduced from 3 to 2 orbs */}
        <Environment preset="studio" resolution={64} />
      </Suspense>
    </Canvas>
  );
}
