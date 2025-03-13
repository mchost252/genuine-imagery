import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Float } from '@react-three/drei'

const PrintingScene = () => {
  const groupRef = useRef()

  useFrame((state) => {
    groupRef.current.rotation.y += 0.002
  })

  return (
    <group ref={groupRef}>
      {/* Printer representation */}
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 1.2, 1.5]} />
          <meshStandardMaterial 
            color="#4a90e2"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Paper tray */}
        <mesh position={[0, -0.7, 0.5]}>
          <boxGeometry args={[1.5, 0.1, 1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Floating design elements */}
        <mesh position={[2, 1, 0]} scale={0.3}>
          <torusGeometry args={[1, 0.2, 16, 100]} />
          <meshStandardMaterial color="#ff4444" />
        </mesh>

        <mesh position={[-2, 0.5, 1]} scale={0.4}>
          <octahedronGeometry />
          <meshStandardMaterial color="#44ff44" />
        </mesh>

        <mesh position={[-1.5, -1, -1]} scale={0.3}>
          <dodecahedronGeometry />
          <meshStandardMaterial color="#4444ff" />
        </mesh>
      </Float>
    </group>
  )
}

export default PrintingScene 