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
        if (typeof window === 'undefined') return
        if (!containerRef.current) return;

        let camera, scene, renderer, composer;
        let planet = null;
        let outlinePass;
        let drag
        let lastX = 0, lastY = 0
        let rotationSpeed = 0.01
        let rotateCooldown = -1;
        let maxRotateCooldown = 100;

        let gradientMap;


        let animationId;

        const observer = new ResizeObserver((entries) => { // ???
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                if (width > 0 && height > 0) {
                    if (!renderer) {
                        init(width, height);
                        animate();
                    } else {
                        resize(width, height);
                    }
                }
            }
        });
        observer.observe(containerRef.current);

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
            outlinePass.edgeStrength = 9.0;
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

            renderer.domElement.addEventListener("pointerdown", onMouseDown)
            window.addEventListener("pointermove", onMouseMove)
            window.addEventListener("pointerup", onMouseUp)
        }

        function loadModel() {
            const loader = new GLTFLoader();
            if (!fileName) {
                console.log("no fiel prob error");
                return
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

            rotateCooldown-=1;//abysmal coding
            if(drag){
                rotateCooldown = maxRotateCooldown
            }
            if (planet && rotateCooldown < 0) {
                planet.rotation.y += 0.005;
            }

            composer.render();
        }

        function onMouseDown(e) {
            if(!planet) return
            drag = true
            lastX = e.clientX
            lastY = e.clientY
        }

        function onMouseUp() {
            if(!planet) return
            drag = false
        }

        function onMouseMove(e) {
            if (!drag || !planet) return
            const dX = e.clientX - lastX
            const dY = e.clientY - lastY

            lastX = e.clientX
            lastY = e.clientY

            const qX = new THREE.Quaternion()
            const qY = new THREE.Quaternion()

            const cameraRight = new THREE.Vector3();
            camera.getWorldDirection(cameraRight);
            cameraRight.cross(camera.up).normalize();
            qX.setFromAxisAngle(cameraRight, dY * rotationSpeed);

            qY.setFromAxisAngle(new THREE.Vector3(0, 1, 0), dX * rotationSpeed)

            planet.quaternion.multiplyQuaternions(qX, planet.quaternion)
            planet.quaternion.multiplyQuaternions(qY, planet.quaternion)
        }

        const resize = (width, height) => {
            renderer.setSize(width, height);
            composer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            outlinePass.setSize(width, height);
        }

        return () => {
            if (observer) observer.disconnect();
            composer?.dispose();
            outlinePass?.dispose();
            if (renderer?.domElement) renderer.domElement.removeEventListener("pointerdown", onMouseDown)
            window.removeEventListener("pointermove", onMouseMove);
            window.removeEventListener("pointerup", onMouseUp);
            cancelAnimationFrame(animationId);
            if (renderer && containerRef.current) {
                renderer.dispose();
                containerRef.current.removeChild(renderer.domElement);
            }
            scene?.clear();

        };
    }, [fileName]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
        />
    );
}
