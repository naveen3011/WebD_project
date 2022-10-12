import './style.css'
import aman from './ak.jpg';
import space from './space.jpg';
import moonT from './moon.jpg';
import normalT from './normal.jpg';

import * as THREE from 'three'
// document.getElementById('ak-img').src = aman
// setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000)

const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector('#bg')
})

window.addEventListener('resize' ,function(){
  const width = window.innerWidth;
  const height = this.window.innerHeight;
  renderer.setSize(width , height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix( );
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth , window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene , camera);


//Torus
const geometry = new THREE.TorusGeometry(10 , 3 , 16 ,100)
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const torus = new THREE.Mesh(geometry,material)

scene.add(torus);

//Lights

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight , ambientLight);



function addStar() {
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})
  const star = new THREE.Mesh(geometry , material);

  const[x,y,z] = Array(3)
  .fill()
  .map(()=> THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star)
}

Array(200).fill().forEach(addStar)


const spaceTexture = new THREE.TextureLoader().load(space)
scene.background = spaceTexture;

//Avatar

const akTexture = new THREE.TextureLoader().load(aman)

const ak =new THREE.Mesh(new THREE.BoxGeometry(3,3,3), new THREE.MeshBasicMaterial({map: akTexture}));

scene.add(ak)

//Moon

const moonTexture = new THREE.TextureLoader().load(moonT)
const normalTexture = new THREE.TextureLoader().load(normalT);

const moon =new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
    })
);

scene.add(moon)


moon.position.z = 30;
moon.position.setX(-10);

ak.position.z = -5;
ak.position.x = 2;

//scroll animation
function moveCamera(){
const t = document.body.getBoundingClientRect().top;
moon.rotation.x += 0.05;
moon.rotation.y += 0.075;
moon.rotation.z += 0.05;

ak.rotation.y += 0.01;
ak.rotation.z += 0.01;

camera.position.z = t * -0.01;
camera.position.x = t * -0.0002;
camera.rotation.y = t * -0.0002;
}


document.body.onscroll = moveCamera;
moveCamera();


function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  ak.rotation.x += 0.01;
  ak.rotation.y += 0.005;
  ak.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  renderer.render(scene , camera)
}

animate();