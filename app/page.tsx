import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full">
      {/* Use Scene Component  */}
      <Scene />
    </main>
  )
}
