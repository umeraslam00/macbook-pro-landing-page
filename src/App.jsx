import { Canvas } from "@react-three/fiber"
import React from "react"
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"
import MacContainer from "./components/MacContainer"


function App() {
  

  return (
    /*
      What is <canvas>?
      - <canvas> is an HTML element used for drawing graphics, animations, and images dynamically with JavaScript.
      - It provides a blank area where we can render 2D or 3D graphics using the Canvas API or WebGL.
      - Commonly used for games, charts, visualizations, and animations.
    */

    /*
    What is <mesh>?
    - <mesh> is a fundamental 3D object in WebGL and Three.js.
    - It consists of:
      1. Geometry (defines the shape, e.g., cube, sphere).
      2. Material (defines appearance, e.g., color, texture).
    - Used in Three.js and React Three Fiber to create 3D objects in a scene.
   */

    <div className="w-full h-screen">
      *////-translate-x-1/2//*

      <div className="navbar line absolute top-0 flex gap-5 w-[100%] justify-center py-6">
      
      {["iPhone", "iPad", "Services", "Mac", "iOS", "Products"].map((items, index) => (
        <a href="#" className="text-white font-[400] text-xl" key={index}>{items}</a>
      ))}

      </div>

      <div className="absolute flex flex-col items-center top-40 left-1/2 -translate-x-1/2 text-white">
        <h3 className="masked text-7xl tracking-tighter font-[700]">macbook pro.</h3>
        <h5 className="font-[500] text-2xl">Oh so pro !</h5>
        <p className="text-center w-3/4 m-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo ducimus, eos placeat.</p>
      
      </div>
      <Canvas camera={{ fov: 12, position: [0, -5, 220] }}>
        <OrbitControls />
        <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr"]} />

        <ScrollControls>
          <MacContainer />
        </ScrollControls>


      </Canvas>
    </div>
  )
}

export default App
