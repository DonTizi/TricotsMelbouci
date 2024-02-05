import * as THREE from "three";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image as ImageImpl, ScrollControls, Scroll, useScroll, Html, useProgress } from "@react-three/drei";

function ResponsiveImageP({ url, position, scale: initialScale }) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  const { size } = useThree();
  const [scale, setScale] = useState(initialScale);

  useEffect(() => {
    // Ajuster selon les besoins pour une meilleure responsivité sur mobile
    const screenWidth = window.innerWidth;
    const factor = screenWidth < 768 ? 0.5 : screenWidth < 1024 ? 0.75 : 1;
    setScale([initialScale[0] * factor, initialScale[1] * factor, 1]);
  }, [size.width, initialScale]);

  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 50), 4, delta);
    if (ref.current.material) {
      ref.current.material.grayscale = THREE.MathUtils.damp(
        ref.current.material.grayscale,
        Math.max(0, 1 - data.delta * 1000),
        4,
        delta
      );
    }
  });

  return (
    <group ref={group} position={position}>
      <ImageImpl ref={ref} url={url} scale={scale} />
    </group>
  );
}

function Page({ urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  const m = 1; // Margins, adjust as needed

  return (
    <group {...props}>
      {urls.map((url, index) => (
        <ResponsiveImageP
          key={index}
          position={[(index - 1) * width * w, 0, index - 1]}
          scale={[width * w - m * 2, 5, 1]}
          url={url}
        />
      ))}
    </group>
  );
}

function Pages() {
  const urls = [
    ["19.jpg", "20.jpg", "21.jpg"],
    ["22.jpg", "23.jpg", "20.jpg"],
    ["25.jpg", "26.jpg", "27.jpg"],
    // Ajoutez plus si nécessaire
  ];

  const { width } = useThree((state) => state.viewport);

  return (
    <>
      {urls.map((pageUrls, index) => (
        <Page key={index} position={[width * index, 0, 0]} urls={pageUrls} />
      ))}
    </>
  );
}

function Loader() {
  const { progress } = useProgress();
  return progress !== 100 ? (
    <Html center wrapperClass="loader-div">
      Loading...
    </Html>
  ) : null;
}

export function Scarfs() {
  return (
    <div className="h-screen w-full max-w-screen-lg mx-auto">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls infinite horizontal damping={1} pages={urls.length} distance={1}>
            <Scroll>
              <Pages />
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
