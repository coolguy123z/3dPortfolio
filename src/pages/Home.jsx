import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader.jsx'
import Robot from '../models/robot.jsx'

const Home = () => {
  const adjustRobotForScreenSize = () => {
    let screenscale
    let screenposition
    let rotation = [0.1, 4.7, 0]

    //  Adjust scale + position dynamically
    if (window.innerWidth < 768) {
      // mobile view
      screenscale = [1.6, 1.6, 1.6]          // slightly bigger for small screen
      screenposition = [0, -5, -35]          // pull closer
    } else if (window.innerWidth < 1200) {
      // tablet
      screenscale = [1.8, 1.8, 1.8]
      screenposition = [0, -6, -40]
    } else {
      // desktop
      screenscale = [2.0, 2.0, 2.0]          // nice big center scale
      screenposition = [0, -7, -45]
    }

    return { screenscale, screenposition, rotation }
  }

  const { screenscale: robotScale, screenposition: robotPosition, rotation: robotRotation } =
    adjustRobotForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center bg-black/30 backdrop-blur-sm rounded-lg px-6 py-3 text-white z-10">
        <h1 className="text-6xl font-bold">Hi, I'm Loc Phan</h1>
        <p className="text-2xl mt-4 font-medium">
          Data Science @ GMU | Passion for AI, Visualization & Problem Solving
        </p>
      </div>

      <Canvas

        className="w-full h-screen bg-transparent"
        camera={{
          position: [0, 2, 12],   // pull camera back a bit
          fov: 40,                // normal perspective (~30–45)
          near: 0.1,
          far: 1000,
        }}
      >

        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />                          {/* base fill */}
          <directionalLight position={[5, 10, 5]} intensity={1.2} /> {/* sunlight */}
          <pointLight position={[-10, -10, -10]} intensity={0.5} />  {/* subtle fill */}
          <hemisphereLight
            skyColor={'#b1e1ff'}
            groundColor={'#000000'}
            intensity={0.6}
          />
          {/* Balanced robot size and position */}
          <Robot
            scale={[2.1, 2.1, 2.1]}       // slightly bigger but not overwhelming
            position={[0, -2.5, 0]} // lift it into frame nicely
            rotation={[0.1, 4.7, 0]}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home
