import React, { useRef } from "react";
import { MeshDistortMaterial, Sphere, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const AboutModel = ({ imgUrl }) => {
  const texture = useTexture(imgUrl);
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Full screen movement
    mesh.current.position.x = Math.sin(t * 0.4) * 3.5;
    mesh.current.position.y = Math.cos(t * 0.6) * 1.8;

    // Subtle rotation
    mesh.current.rotation.x = t * 0.2;
    mesh.current.rotation.y = t * 0.2;
  });

  return (
    <>
      <Sphere ref={mesh} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          map={texture} // Your photo is the "skin"
          transparent={true} // Required for transparency
          opacity={0.9} // Adjust this (0 is invisible, 1 is solid)
          distort={0.5} // The "wavy" water effect
          speed={2} // Speed of the waves
          roughness={0} // Makes it shiny
        />
      </Sphere>

      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
    </>
  );
};

export default AboutModel;
