import * as THREE from "three";

let cube: THREE.Mesh;
function drawCube(scene: THREE.Scene) {
  const geometry = new THREE.BoxGeometry(50, 50, 50);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

const AXIS_LENGTH = 10000;

function drawAxes(scene: THREE.Scene) {
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });

  const x = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(AXIS_LENGTH, 0, 0)];
  const xGeometry = new THREE.BufferGeometry().setFromPoints(x);
  const y = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, AXIS_LENGTH, 0)];
  const yGeometry = new THREE.BufferGeometry().setFromPoints(y);
  const z = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, AXIS_LENGTH)];
  const zGeometry = new THREE.BufferGeometry().setFromPoints(z);

  [xGeometry, yGeometry, zGeometry].forEach((geom) => {
    const line = new THREE.Line(geom, material);
    scene.add(line);
  });
}

/* lights

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 3);
  dirLight1.position.set(1, 1, 1);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0x002288, 3);
  dirLight2.position.set(-1, -1, -1);
  scene.add(dirLight2);

  const ambientLight = new THREE.AmbientLight(0x555555);
  scene.add(ambientLight);
  */

export function draw(scene: THREE.Scene) {
  drawCube(scene);
  drawAxes(scene);
}

export function animate() {
  if (cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
}
