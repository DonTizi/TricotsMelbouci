'use client'
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, Image as ImageImpl, ScrollControls, Scroll, useScroll, Html, useProgress } from "@react-three/drei";
import { useId } from 'react'
import Link from 'next/link'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import image1 from '@/images/Tricot Melbouci/1.jpg'

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
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      {/* Ajoutez ici votre logique pour afficher les images, en vous assurant que les chemins sont corrects */}
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
    <Page position={[-width * 1, 0, 0]} urls={[image1, image1, image1]} />
    <Page position={[width * 0, 0, 0]} urls={["7.png", "8.png", "9.png"]} />
    <Page position={[width * 1, 0, 0]} urls={["10.png", "11.png", "12.png"]} />
    <Page position={[width * 2, 0, 0]} urls={["1.png", "2.png", "3.png"]} />
    <Page position={[width * 3, 0, 0]} urls={["13.png", "14.png", "15.png"]} />

    <Page position={[width * 4, 0, 0]} urls={["4.png", "5.png", "6.png"]} />
    <Page position={[width * 5, 0, 0]} urls={["7.png", "8.png", "9.png"]} />
    <Page position={[width * 6, 0, 0]} urls={["10.png", "11.png", "12.png"]} />
    <Page position={[width * 7, 0, 0]} urls={["1.png", "2.png", "3.png"]} />
    <Page position={[width * 8, 0, 0]} urls={["13.png", "14.png", "15.png"]} />

    </>
  );
}

function Loader() {
  const progress = useProgress((state) => state.progress);
  return (
    <Html center wrapperClass="loader-div">
      {progress.toFixed()}% loaded
    </Html>
  );
}

const GalleryS = () => {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Loader />
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={4} pages={6} distance={1}>
          <Scroll>
            <Pages />
          </Scroll>
              {/* <h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "25vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}></h1>

              <h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "525vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "625vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "725vw" }}></h1>
              <h1 style={{ position: "absolute", top: "20vh", left: "825vw" }}></h1> */}        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
};






export default function Gallery() {
  return (
    <>
      <PageIntro eyebrow="Have pleasure" title="Our Gallery">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>
      <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">

      <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="max-w-3xl">

        <GalleryS />
        </FadeIn>
        
      </Container>
      </div>

    </>
  )
}
