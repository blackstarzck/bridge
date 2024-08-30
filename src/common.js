import { Material, World } from 'cannon-es';
import { SphereGeometry, Scene, BoxGeometry, MeshPhongMaterial } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export const cm1 = {
  scene: new Scene(),
  gltfLoader: new GLTFLoader(),
  mixer: undefined,
  world: new World(),
  defaultMaterial: new Material('default'),
  glassMaterial: new Material('glass'),
  playerMaterial: new Material('player'),
};

export const cm2 = {
  step: 0,
  backgroundColor: '#3E1322',
  lightColor: '#FFE9AC',
  lightOffColor: '#222',
  pillarColor: '#071D28',
  floorColor: '#111',
  barColor: '#441C1D',
  glassColor: '#9FDFFF'
}

export const geo = {
  pillar: new BoxGeometry(5, 10, 5),
  floor: new BoxGeometry(200, 1, 200),
  bar: new BoxGeometry(0.1, 0.3, 1.2 * 21),
  sideLight: new SphereGeometry(0.1, 6, 6),
  glass: new BoxGeometry(1.2, 0.05, 1.2)
};

export const mat = {
  pillar: new MeshPhongMaterial({ color: cm2.pillarColor }),
  floor: new MeshPhongMaterial({ color: cm2.floorColor }),
  bar: new MeshPhongMaterial({ color: cm2.barColor }),
  sideLight: new MeshPhongMaterial({ color: cm2.lightColor }),
  glass1: new MeshPhongMaterial({
    color: cm2.glassColor,
    transparent: true,
    opacity: 0.1
  }),
  glass2: new MeshPhongMaterial({
    color: cm2.glassColor,
    transparent: true,
    opacity: 0.1
  })
}

const normalSound = new Audio();
normalSound.src = '/sounds/Crash.mp3';
const strongSound = new Audio();
strongSound.src = '/sounds/Wood Hit Metal Crash.mp3';
export const sounds = {
  normal: normalSound,
  strong: strongSound
};