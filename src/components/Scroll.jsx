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
 <Page position={[-width * 1, 0, 0]} urls={["2.jpg", "3.jpg", "4.jpg"]} />
<Page position={[width * 0, 0, 0]} urls={["5.jpg", "6.jpg","8.jpg"]} />
<Page position={[width * 1, 0, 0]} urls={["7.jpg", "9.jpg", "10.jpg"]} />
<Page position={[width * 2, 0, 0]} urls={["11.jpg", "12.jpg","13.jpg"]} />
<Page position={[width * 3, 0, 0]} urls={["14.jpg", "15.jpg","16.jpg"]} />
<Page position={[width * 4, 0, 0]} urls={["17.jpg", "18.jpg","19.jpg"]} />
<Page position={[width * 5, 0, 0]} urls={["20.jpg", "21.jpg","22.jpg"]} />
<Page position={[-width * 6, 0, 0]} urls={["23.jpg", "24.jpg", "25.jpg"]} />
<Page position={[width * 7, 0, 0]} urls={["26.jpg", "27.jpg","28.jpg"]} />
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

export function ScrollImg() {
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