
import { Canvas,    useLoader  } from '@react-three/fiber';
import { TextureLoader, Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useRef } from 'react';



function PizzaPlanet(): JSX.Element {
    const texture = useLoader(TextureLoader, '/assets/pizzaPlanet.jpg');
    const pizzaRef = useRef<Mesh>(null!);
    const isAnimationComplete = useRef<boolean>(false);

    const startPosition: [number, number, number] = [0, 0, 0];
    const endPosition: [number, number, number] = [ 0, 0, 0];

    const {position} = useSpring({
      from: {position: startPosition},
      to: {position: endPosition},
      config: {mass: 1, tension: 1, friction: 1},
      onRest: () => {isAnimationComplete.current = true},
    })


    return(
      <animated.mesh position={position} ref={pizzaRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </animated.mesh>
    )
  }
  
  export default function AnimatedPizza(): JSX.Element {
    return(
      <Canvas>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <PizzaPlanet/>
        <OrbitControls enableZoom={false} rotateSpeed={0.2}/>
      </Canvas>
    )
  }