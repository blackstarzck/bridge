import { cm1 } from './common.js';
import { Mesh, AnimationMixer, BoxGeometry, MeshBasicMaterial } from 'three';
import { Stuff } from './Stuff.js';

export class Player extends Stuff {
  constructor(info) {
    super(info);

    this.width = 0.5;
    this.height = 0.5;
    this.depth = 0.5;

    cm1.gltfLoader.load(
      './models/ilbuni.glb',
      glb => {
        glb.scene.traverse(child => {
          if(child.isMesh){
            child.castShadow = true;
            console.log("child", child);
          };
        });

        this.modelMesh = glb.scene.children[0];
        this.modelMesh.position.set(this.x, this.y, this.z);
        this.modelMesh.rotation.set(
          this.rotationX,
          this.rotationY,
          this.rotationZ
        );
        cm1.scene.add(this.modelMesh);

        
        this.modelMesh.castShadow = true;

        this.modelMesh.animations = glb.animations;
        cm1.mixer = new AnimationMixer(this.modelMesh);
        this.actions = [];
        this.actions[0] = cm1.mixer.clipAction(this.modelMesh.animations[0]); // default
        this.actions[1] = cm1.mixer.clipAction(this.modelMesh.animations[1]); // fall
        this.actions[2] = cm1.mixer.clipAction(this.modelMesh.animations[2]); // jump
        this.actions[2].repetitions = 1;
        this.actions[0].play();

        this.setCannonBody();
      }
    );

    // this.mesh = new Mesh(this.geometry, this.material);
    // this.mesh.position.set(this.x, this.y, this.z);
    // this.mesh.castShadow = true;
    // this.mesh.receiveShadow = true;

    // cm1.scene.add(this.mesh);
  }
}