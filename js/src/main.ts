import * as THREE from "three";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import { draw } from "./draw";

let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  controls: TrackballControls;

function init() {
  const aspect = window.innerWidth / window.innerHeight;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, aspect, 1, 1000);
  camera.position.z = 500;

  // renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  document.body.appendChild(renderer.domElement);

  // resize
  window.addEventListener("resize", onWindowResize);

  createControls(camera);

  // Starting position
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0);
}

function createControls(camera: THREE.Camera) {
  controls = new TrackballControls(camera, renderer.domElement);

  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;

  controls.keys = ["KeyA", "KeyS", "KeyD"];
}

function onWindowResize() {
  const aspect = window.innerWidth / window.innerHeight;

  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  controls.handleResize();
}

function animate() {
  controls.update();

  renderer.render(scene, camera);
}

function main() {
  init();
  draw(scene);
}

main();
