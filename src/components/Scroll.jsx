"use client"
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, Image as ImageImpl, ScrollControls, Scroll, useScroll, Html, useProgress } from "@react-three/drei";

function Image(props) {
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
  const w = width < 10 ? 1.5 / 3 : 1 / 3; // Ajustez cette ligne pour changer la largeur
  const imageWidth = width * w - m * 2; // Calcul de la largeur de l'image
  const imageHeight = 5; // Hauteur fixe, ajustez selon les besoins

  return (
    <group {...props}>
     <Image position={[-width * w, 0, -1]} scale={[imageWidth, imageHeight, 1]} url={urls[0]} />
      <Image position={[0, 0, 0]} scale={[imageWidth, imageHeight, 1]} url={urls[1]} />
      <Image position={[width * w, 0, 1]} scale={[imageWidth, imageHeight, 1]} url={urls[2]} />
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
    <Page position={[-width * 1, 0, 0]} urls={["1.jpg", "2.jpg", "3.jpg"]} />
    <Page position={[width * 0, 0, 0]} urls={["4.jpg", "5.jpg", "6.jpg"]} />
    <Page position={[width * 1, 0, 0]} urls={["7.jpg", "8.jpg", "9.jpg"]} />
    <Page position={[width * 2, 0, 0]} urls={["10.jpg", "11.jpg", "12.jpg"]} />
    <Page position={[width * 3, 0, 0]} urls={["13.jpg", "14.jpg", "15.jpg"]} />

    <Page position={[width * 4, 0, 0]} urls={["16.jpg", "17.jpg", "18.jpg"]} />
  
    </>
  );
}

function Loader() {
  const progress = useProgress(state => state.progress)
  if (progress !== 100) {
    return (
      <Html center wrapperClass="loader-div">
        {progress.toFixed()}% loaded
      </Html>
    );
  }

  return null
}

export function ScrollImg() {
  return (
    <>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Loader />
        <Suspense fallback={null}>
          <ScrollControls infinite horizontal damping={4} pages={6} distance={1}>
            <Scroll>
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
    </>
  );
}