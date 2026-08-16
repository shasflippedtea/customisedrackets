import react from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

function RacketViewer({selectedModel}) {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const modelRef = useRef(null);
    
    useEffect(() => {

        if (mountRef.current.children.length > 0) return; 

        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000,);
        camera.position.x = 0;
        camera.position.y = 5;
        camera.position.z = 5;


        const renderer = new THREE.WebGLRenderer(); // sizing the render 
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);
        renderer.setClearColor(0x000000, 0); // Transparent background

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 4, 0);
        controls.update();

        const loader = new OBJLoader(); // To load the model file
        loader.load('public/models/RakatANDString.obj', (object) => {
            scene.add(object);
            object.scale.set(3, 2.5, 2.5);
            object.position.set(0, -4, 0);
            console.log(object.position);
            console.log(object);
        });
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();


    }, 
    []);

    useEffect(() => {
        console.log('selectedModel changed:', selectedModel)
        if (!sceneRef.current) return;

        if (modelRef.current) {
            sceneRef.current.remove(modelRef.current);

        }

        const modelFile = selectedModel === 'Arcsaber 7 Pro' ? 'models/Arcsaber7pro.obj' : 'models/RakatANDString.obj';
        const material = selectedModel === 'Arcsaber 7 Pro' ? 'models/Arcsaber7pro.mtl' : null;

        if (material) {
            const mtlLoader = new MTLLoader();
            mtlLoader.load(material, (mats) => {
            console.log('MTL loaded');
            mats.preload();

            const objLoader = new OBJLoader();
            console.log('OBJ loaded');
            objLoader.setMaterials(mats);
            objLoader.load(modelFile, (object) => {
            object.scale.set(3, 2.5, 2.5);
            object.position.set(0, -4, 0);
            sceneRef.current.add(object);
            modelRef.current = object;
        })
      })
  
    } else { 
        const loader = new OBJLoader();
        loader.load(modelFile, (object) => {
            object.scale.set(3, 2.5, 2.5);
            object.position.set(0, -4, 0);
            sceneRef.current.add(object);
        })

    }
    }, [selectedModel]);

    return (
        <div ref={mountRef} style={{ width: '50vw', height: '100vh'}} />
    );
}
export default RacketViewer;