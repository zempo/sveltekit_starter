import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import gsap from 'gsap';
import {
	AxesHelper,
	BoxGeometry,
	Clock,
	DoubleSide,
	LoadingManager,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	PlaneGeometry,
	Scene,
	SphereBufferGeometry,
	WebGLRenderer
} from 'three';

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
	spinCube: () => {
		let yDist = cube.rotation.y;
		gsap.to(cube.rotation, { duration: 1, y: yDist + 10 });
	} 
};

const loadMngr = new LoadingManager();
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
const scene = new Scene();
// eslint-disable-next-line no-unused-vars
const axesHelper = new AxesHelper();
// Debug
// scene.add(axesHelper)
const aspect = window.innerWidth / window.innerHeight;
const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);

//------------------------------------------

// GEOMETRIES
const GEOS = {
	cube: new BoxGeometry(1, 1, 1),
	plane: new PlaneGeometry(1, 1, 100, 100),
	sphere: new SphereBufferGeometry(0.5, 100, 100)
};

const material = new MeshBasicMaterial({
	color: controlNodes.color,
	wireframe: controlNodes.wireframe,
	side: DoubleSide
});

const cube = new Mesh(GEOS.cube, material);
let renderer;
scene.add(cube);
camera.position.z = 3;
scene.add(camera);

//------------------------------------------
/**
 * DEBUG
 */
gui.add(cube.position, 'x').min(-3).max(3).step(0.01).name('Cube Left/Right');
gui.add(cube.position, 'y').min(-3).max(3).step(0.01).name('Cube Elevation');
gui.add(cube.position, 'z').min(-3).max(3).step(0.01).name('Cube Front/Back');

// Toggle visibility
gui.add(cube, 'visible').name('Toggle Visibility');
// Toggle wireframe
gui.add(material, 'wireframe').name('Toggle Wireframe');

gui.addColor(controlNodes, 'color').onChange(() => {
	material.color.set(controlNodes.color);
});

gui.add(controlNodes, 'spinCube').name('Spin Cube')

//------------------------------------------
const clock = new Clock();

const animate = () => {
	const elapsedTime = clock.getElapsedTime();

	cube.rotation.x = elapsedTime * 0.01;
	cube.rotation.y = elapsedTime * 0.01;

	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(animate);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	// Controls
	const controls = new OrbitControls(camera, el);
	controls.enableDamping = true;

	renderer = new WebGLRenderer({ antialias: true, canvas: el });

    renderer.setClearColor( 0xffffff, 0);

	resize();
	animate(el);
};

window.addEventListener('resize', resize);