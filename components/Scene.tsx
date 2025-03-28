"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  /// 01 add Canvas
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
       {/* 02 add Light */}
      <directionalLight position={[-5, -5, 5]} intensity={4} />

       {/* 03 add 3D objects */}
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={3}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}
