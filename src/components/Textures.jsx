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

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const pageWidth = width; // Assurez-vous que ceci correspond à la largeur réelle de vos pages
  const w = pageWidth < 10 ? 2 / 2 : 2 / 4;
  return (
    <group {...props}>
      <ImageP position={[-width * w, 0, -1]} scale={[width * w - m * 2, 4, 1]} url={urls[0]} />
      <ImageP position={[0, 0, 0]} scale={[width * w - m * 2, 4, 1]} url={urls[1]} />
      <ImageP position={[width * w, 0, 1]} scale={[width * w - m * 2, 4, 1]} url={urls[2]} />  
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  const pageWidth = width; 

  return (
<>
<Page position={[-width * 1, 0, 0]} urls={["75.jpg", "31.jpg", "32.jpg"]} />
<Page position={[width * 0, 0, 0]} urls={["33.jpg", "34.jpg","35.jpg"]} />
<Page position={[width * 1, 0, 0]} urls={["36.jpg", "37.jpg", "38.jpg"]} />
<Page position={[width * 2, 0, 0]} urls={["39.jpg", "40.jpg","41.jpg"]} />
<Page position={[width * 3, 0, 0]} urls={["42.jpg", "43.jpg","44.jpg"]} />
<Page position={[width * 4, 0, 0]} urls={["45.jpg", "46.jpg","47.jpg"]} />
<Page position={[width * 5, 0, 0]} urls={["48.jpg", "49.jpg","50.jpg"]} />
<Page position={[width * 6, 0, 0]} urls={["51.jpg", "52.jpg", "53.jpg"]} />
<Page position={[width * 7, 0, 0]} urls={["54.jpg", "55.jpg","56.jpg"]} />
<Page position={[width * 8, 0, 0]} urls={["57.jpg", "58.jpg", "59.jpg"]} />
<Page position={[width * 9, 0, 0]} urls={["60.jpg", "61.jpg","62.jpg"]} />
<Page position={[width * 10, 0, 0]} urls={["63.jpg", "64.jpg","65.jpg"]} />
<Page position={[width * 11, 0, 0]} urls={["66.jpg", "67.jpg","68.jpg"]} />
<Page position={[width * 12, 0, 0]} urls={["69.jpg", "70.jpg","71.jpg"]} />
<Page position={[-width * 13, 0, 0]} urls={["72.jpg", "73.jpg", "74.jpg"]} />
<Page position={[width * 14, 0, 0]} urls={["75.jpg", "76.jpg","33.jpg"]} />



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
          <ScrollControls infinite horizontal damping={0.4} pages={14} distance={2}>
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