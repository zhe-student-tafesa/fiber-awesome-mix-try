import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"

//01 use useGLTF load glb!
useGLTF.preload("/robot_playground.glb")

export default function Model() {
  const group = useRef<Group>(null)
  // 02 get scene
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  )
  const { actions, clips } = useAnimations(animations, scene)
  const scroll = useScroll()

  useEffect(() => {
    console.log(actions)
    ////////////////////// at beginning , We need to Pause
    //@ts-ignore
    actions["Experiment"].play().paused = true
  }, [])
  useFrame(
    () =>
      //@ts-ignore
      (actions["Experiment"].time =
        //@ts-ignore
        (actions["Experiment"].getClip().duration * scroll.offset) / 2)//  change the Animation speed
  )
  return (
    <group ref={group}>
      {/* 原始  03 use scene*/}
      <primitive object={scene} />
    </group>
  )
}
