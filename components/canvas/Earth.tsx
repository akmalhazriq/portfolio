import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

interface EarthProps {
    scale: number;
}

function Earth({ scale }: EarthProps) {
    const earth = useGLTF('/planet/scene.gltf')

    return (
        <primitive
            object={earth.scene}
            scale={scale} // Use the scale prop here
            position-y={0}
            rotation-y={0}
        />
    )
}

export default function EarthCanvas() {
    const [scale, setScale] = useState(1); // Default scale

    useEffect(() => {
        const handleResize = () => {
            let newScale;
            if (window.innerWidth < 768) { // Small screens (you can adjust the breakpoint)
                newScale = Math.max(2, window.innerWidth / 500); // Larger scale for small screens
            } else {
                newScale = Math.max(1, window.innerWidth / 1000); // Default scale for medium and large screens
            }
            setScale(newScale);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it once to set the initial scale

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Canvas
            shadows
            frameloop='always'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
            }}
        >
            <Suspense>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                <Earth scale={scale} /> {/* Pass the scale to the Earth component */}
            </Suspense>
        </Canvas>
    )
}