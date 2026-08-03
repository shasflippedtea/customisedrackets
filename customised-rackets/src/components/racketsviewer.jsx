import react from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';

function RacketViewer() {
    const mountRef = useRef(null);
    
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000,);
        camera.position.z = 10;
        const renderer = new THREE.WebGLRenderer(); // sizing the render 
        renderer.setSize(window.innerWidth / 2, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        renderer.render(scene, camera);
        const loader = new OBJLoader(); // To load the model file
        loader.load('public/models/RakatOnly.obj', (object) => {
            scene.add(object);
            object.scale.set(1,3,5);
            object.position.set(0, 0, 0);
            console.log(object.position);
            console.log(object);
            renderer.render(scene, camera); 
        });
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);
    }, 
    []);

    return (
        <div ref={mountRef} style={{ width: '50vw', height: '100vh' }} />
    );
}
export default RacketViewer;