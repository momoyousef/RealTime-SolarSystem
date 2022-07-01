import './style.css'
import * as THREE from 'three';
import { GridHelper, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshStandardMaterial,ShaderMaterial } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
const normaltexture = new THREE.TextureLoader().load('normal.jpg');
const mernormtexture = new THREE.TextureLoader().load('mernorm.jpg');
const venusnormtexture = new THREE.TextureLoader().load('venusnorm1.jpg');
const earthnormtexture = new THREE.TextureLoader().load('earthnorm1.jpg');
const marsnormaltexture = new THREE.TextureLoader().load('marsnormal.jpg');
//scene
const scene = new THREE.Scene();
//camera you can chnage fov or whatava
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000);
//renderer and pixel ratio/size
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});
//setting the visualization
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render( scene, camera);

//geos
const geometry1 = new THREE.TorusGeometry(8,1,14,50);
const material = new THREE.MeshStandardMaterial({color: 0xF9E5BC })
const torus = new THREE.Mesh( geometry1, material);
scene.add(torus);


const suntexture = new THREE.TextureLoader().load('sun.jpg');
const sun = new THREE.Mesh(
new THREE.SphereGeometry(40,40,40),
new THREE.MeshStandardMaterial({
  map: suntexture,
  normalMap: normaltexture
})
);
//merucry
const mertexture = new THREE.TextureLoader().load('mercury.jpg');
const mercury = new THREE.Mesh(
new THREE.SphereGeometry(6.4,30,30),
new THREE.MeshStandardMaterial({
  map: mertexture,
  normalMap: mernormtexture
})
);
const mercuryObj = new THREE.Object3D();
scene.add(mercuryObj);
mercuryObj.add(mercury);
mercury.position.x = 100;
//venus
const ventexture = new THREE.TextureLoader().load('venus.jpg');
const venus = new THREE.Mesh(
new THREE.SphereGeometry(14,30,30),
new THREE.MeshStandardMaterial({
  map: ventexture,
  normalMap: venusnormtexture
})
);
const venusObj = new THREE.Object3D();
scene.add(venusObj);
venusObj.add(venus);
venus.position.x = 180;

//earth
const earthtexture = new THREE.TextureLoader().load('earth.jpg');
const earth = new THREE.Mesh(
new THREE.SphereGeometry(18,30,30),
new THREE.MeshStandardMaterial({
  map: earthtexture,
  normalMap: earthnormtexture
})
);
const earthObj = new THREE.Object3D();
scene.add(earthObj);
earthObj.add(earth);
earth.position.x = 280;


//mars
const marstexture = new THREE.TextureLoader().load('mars.jpg');
const mars = new THREE.Mesh(
new THREE.SphereGeometry(8,30,30),
new THREE.MeshStandardMaterial({
  map: marstexture,
  normalMap: marsnormaltexture
})
);
const marsObj = new THREE.Object3D();
scene.add(marsObj);
marsObj.add(mars);
mars.position.x = 360;



//astreoid belt


 

//jupiter


//saturn


//uranus


//neptune

//pluto
scene.add(sun);
//lighting and helper
const ambientL = new THREE.AmbientLight(0xF9E5BC);
scene.add(ambientL);
const pointLight = new THREE.PointLight(0xF9E5BC, 3, 800);
scene.add(pointLight);
//controls
const controls = new OrbitControls(camera, renderer.domElement);
//star generation
function star(){
const star1 = new THREE.TextureLoader().load('lol6.jpg')
const geometry = new THREE.SphereGeometry(0.5, 24, 24);
const material = new THREE.MeshStandardMaterial({
  map: star1,
  normalMap: normaltexture
  
})
const star = new THREE.Mesh( geometry, material);


const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(900));
star.position.set( x , y ,z);
scene.add(star);
};
Array(300).fill().forEach(star);
animate();
//backround
const background = new THREE.CubeTextureLoader();
const texture = background.load([
  'px1.jpg',
  'nx1.jpg',
  'py1.jpg',
  'ny1.jpg',
  'pz1.jpg',
  'nz1.jpg',
]);
scene.background = texture;

//func for recusrive animation
function animate(){
  requestAnimationFrame( animate);
  sun.rotateY(0.0004);
  mercury.rotateY(0.001);
  mercuryObj.rotateY(0.0014);
  venus.rotateY(0.0009);
  venusObj.rotateY(0.001);
  earth.rotateY(0.0007);
  earthObj.rotateY(0.0008);
  mars.rotateY(0.00011);
  marsObj.rotateY(0.0009);
  controls.update();
  renderer.render( scene, camera);
}