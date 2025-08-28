import { useRef, useEffect } from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export const PlanetRender = ({ fileName }) => {
    const containerRef = useRef()

    useEffect(() => {
        if (!containerRef.current) return;

        let camera, scene, renderer, composer;
        let planet = null;
        let outlinePass;
        let tempObserver
        let observer

        let refWidth = containerRef.current.offsetWidth;
        let refHeight = containerRef.current.offsetHeight;

        let gradientMap;

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        let animationId;

        if (refWidth > 0 && refHeight > 0) {
            init(refWidth, refHeight);
            animate();
        } else {
            tempObserver = new ResizeObserver(() => {
                refWidth = containerRef.current.offsetWidth;
                refHeight = containerRef.current.offsetHeight;
                if (refWidth > 0 && refHeight > 0) {
                    tempObserver.disconnect();
                    init(refWidth, refHeight);
                    animate();
                }
            });
            tempObserver.observe(containerRef.current);
        }



        function init(width, height) {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(
                width,
                height
            );
            containerRef.current.appendChild(renderer.domElement);


            composer = new EffectComposer(renderer);

            const renderScene = new RenderPass(scene, camera);
            composer.addPass(renderScene);


            outlinePass = new OutlinePass(
                new THREE.Vector2(width, height),
                scene,
                camera
            );
            outlinePass.edgeStrength = 10.0;
            outlinePass.edgeGlow = 0.0;
            outlinePass.edgeThickness = 1.0;
            outlinePass.visibleEdgeColor.set("#ED6A5A"); // outline color
            outlinePass.hiddenEdgeColor.set("#000000");
            outlinePass.selectedObjects = []
            composer.addPass(outlinePass);

            const ambientLight = new THREE.AmbientLight(0xFFD1DC, 1);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xFFFFDC, 3);
            directionalLight.position.set(5, 5, 0);
            scene.add(directionalLight);


            gradientMap = new THREE.TextureLoader().load('https://threejs.org/examples/textures/gradientMaps/fiveTone.jpg');
            gradientMap.minFilter = THREE.NearestFilter;
            gradientMap.magFilter = THREE.NearestFilter;

            loadModel();

            

            let resizeTimeout;
            observer = new ResizeObserver(() => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    const newWidth = containerRef.current.clientWidth;
                    const newHeight = containerRef.current.clientHeight;
                    renderer.setSize(newWidth, newHeight);
                    camera.aspect = newWidth / newHeight;
                    composer.setSize(newWidth, newHeight);
                    camera.updateProjectionMatrix();
                }, 1);
            });
            observer.observe(containerRef.current);
        }

        function loadModel() {
            const loader = new GLTFLoader();
            if (!fileName) {
                console.log("no fiel prob error");
            }
            loader.load(
                fileName,
                function (gltf) {

                    planet = gltf.scene;
                    let scaleSize = 1
                    planet.userData.scaleSize = scaleSize;
                    planet.scale.set(scaleSize, scaleSize, scaleSize);

                    const meshes = [];
                    planet.traverse(child => {
                        if (child.isMesh) {
                            meshes.push(child);
                        }
                    });


                    meshes.forEach(child => {
                        if (child.isMesh) {
                            child.geometry.computeVertexNormals();
                            //child.geometry = LoopSubdivision.modify(child.geometry, 1, params);
                            const mat = new THREE.MeshToonMaterial({
                                color: child.material.color,
                                gradientMap: gradientMap,
                                emissive: new THREE.Color(0x000000),
                                emissiveIntensity: 0.0,
                            });
                            child.material = mat;
                        }
                    });


                    scene.add(planet);
                },
                undefined,
                function (error) {
                    console.error('Model died:', error);
                }
            );
        }
        function animate() {
            animationId = requestAnimationFrame(animate)

            if (planet) {
                planet.rotation.y += 0.005;
            }

            composer.render();
        }

        return () => {
            if (observer) observer.disconnect();
            composer?.dispose();
            outlinePass?.dispose();
            cancelAnimationFrame(animationId);
            if (renderer && containerRef.current) {
                renderer.dispose();
                containerRef.current.removeChild(renderer.domElement);
            }
            scene.clear();

        };
    }, [fileName]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
        />
    );
}
