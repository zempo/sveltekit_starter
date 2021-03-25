/* eslint-disable no-undef */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import gsap from 'gsap';

/**
 * DEBUG + CONTROLS
 */
const gui = new dat.GUI({ closed: false, width: 400 });
// Hide on load
// gui.hide();

// Press h twice to open

const controlNodes = {
	color: 0x00ff00,
	wireframe: false,
	spin: () => {
		let yDist = mesh.rotation.y;
		gsap.to(mesh.rotation, { duration: 1, y: yDist + 10 });
	}
};

const loadMngr = new THREE.LoadingManager();
const lFxns = {
	start: () => {
		console.log('starts');
	},
	load: () => {
		console.log('loaded');
	},
	progress: () => {
		console.log('progress');
	}
};

loadMngr.onStart = lFxns.start;
loadMngr.onLoad = lFxns.load;
loadMngr.onProgress = lFxns.progress;

// -----------------------------------
/**
 * CAMERAS + SCENE
 */
const scene = new THREE.Scene();
// eslint-disable-next-line no-unused-vars
const axesHelper = new THREE.AxesHelper();
// Debug
// scene.add(axesHelper)
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//------------------------------------------

// GEOMETRIES
const GEOS = {
	cube: new THREE.BoxGeometry(1, 1, 1),
	plane: new THREE.PlaneGeometry(1, 1, 100, 100),
	sphere: new THREE.SphereBufferGeometry(0.5, 100, 100)
};

const material = new THREE.MeshBasicMaterial({ color: controlNodes.color });
const cube = new THREE.Mesh(GEOS.cube, material);
let renderer;
scene.add(cube);
camera.position.z = 5;

const clock = new THREE.Clock();

const animate = () => {
	const elapsedTime = clock.getElapsedTime();

	cube.rotation.x = elapsedTime * 0.01;
	cube.rotation.y = elapsedTime * 0.01;

	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(animate);
};

const resize = () => {
	// eslint-disable-next-line no-undef
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = aspect;
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	resize();
	animate();
};

window.addEventListener('resize', resize);
