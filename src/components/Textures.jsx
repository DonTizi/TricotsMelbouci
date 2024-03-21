'use client'
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, Image as ImageImpl, ScrollControls, Scroll, useScroll, Html, useProgress } from "@react-three/drei";
function ImageP(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 50), 4, delta);
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      Math.max(0, 1 - data.delta * 1000),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.3, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const pageWidth = width; // Assurez-vous que ceci correspond à la largeur réelle de vos pages
  const w = pageWidth < 10 ? 2 / 2 : 2 / 4;
  return (
    <group {...props}>
      <ImageP position={[-width * w, 0, -1]} scale={[width * w - m * 2, 4, 1]} url={urls[0]} />
      <ImageP position={[0, 0, 0]} scale={[width * w - m * 2, 4, 1]} url={urls[1]} />
      <ImageP position={[width * w, 0, 1]} scale={[width * w - m * 2, 4, 1]} url={urls[2]} />  
    </group>
  );// 2 = width , 4 egale le height et 1 le depth
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  const pageWidth = width; // Assurez-vous que ceci correspond à la largeur réelle de vos pages

  return (
    <>
<Page position={[-width * 1, 0, 0]} urls={["texture/31.jpg", "texture/61.jpg", "texture/33.jpg"]} />
<Page position={[width * 0, 0, 0]} urls={["texture/34.jpg", "texture/35.jpg", "texture/36.jpg"]} />
<Page position={[width * 1, 0, 0]} urls={["texture/37.jpg", "texture/38.jpg", "texture/39.jpg"]} />
<Page position={[width * 2, 0, 0]} urls={["texture/40.jpg", "texture/55.jpg", "texture/65.jpg"]} />
<Page position={[width * 3, 0, 0]} urls={["texture/43.jpg", "texture/44.jpg", "texture/45.jpg"]} />
<Page position={[width * 4, 0, 0]} urls={["texture/46.jpg", "texture/47.jpg", "texture/48.jpg"]} />
<Page position={[width * 5, 0, 0]} urls={["texture/49.jpg", "texture/50.jpg", "texture/51.jpg"]} />
<Page position={[width * 6, 0, 0]} urls={["texture/52.jpg", "texture/53.jpg", "texture/54.jpg"]} />
<Page position={[width * 7, 0, 0]} urls={["texture/55.jpg", "texture/56.jpg", "texture/57.jpg"]} />
<Page position={[width * 8, 0, 0]} urls={["texture/58.jpg", "texture/59.jpg", "texture/60.jpg"]} />
<Page position={[width * 9, 0, 0]} urls={["texture/61.jpg", "texture/62.jpg", "texture/63.jpg"]} />
<Page position={[width * 10, 0, 0]} urls={["texture/64.jpg", "texture/65.jpg", "texture/66.jpg"]} />
<Page position={[width * 11, 0, 0]} urls={["texture/67.jpg", "texture/68.jpg", "texture/69.jpg"]} />
<Page position={[width * 12, 0, 0]} urls={["texture/70.jpg", "texture/71.jpg", "texture/72.jpg"]} />
<Page position={[width * 13, 0, 0]} urls={["texture/73.jpg", "texture/74.jpg", "texture/75.jpg"]} />

    </>

  );
}

function Loader() {
  const progress = useProgress(state => state.progress)
  if (progress !== 100) {
    return (
      <Html center wrapperClass="loader-div">
      </Html>
    );
  }

  return null
}

export function Textures() {
  return (
    <>
<div className="h-screen w-full max-w-screen-lg mx-auto">

      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Loader />
        <Suspense fallback={null}>
          <ScrollControls infinite horizontal damping={0.4} pages={6} distance={2}>
            <Scroll >
              <Pages />
            </Scroll>
            <Scroll html>
              {/* <h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "25vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}></h1>

              <h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "525vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "625vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "725vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "825vw" }}></h1> */}
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
      </div>
    </>
  );
}