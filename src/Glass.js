import { cm1, geo, mat, sounds } from './common.js';
import { Mesh } from 'three';
import { Stuff } from './Stuff.js';

export class Glass extends Stuff {
  constructor(info) {
    super(info);

    this.type = info.type;
    this.step = info.step;

    switch(this.type){
      case 'normal':
        this.material = mat.glass1;
        this.mass = 1;
        break;
      case 'strong':
        this.material = mat.glass2;
        this.mass = 0;
        break;
    };

    this.geometry = geo.glass;

    this.width = this.geometry.parameters.width;
    this.height = this.geometry.parameters.height;
    this.depth = this.geometry.parameters.depth;

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.name = this.name;
    this.mesh.step = this.step;
    this.mesh.type = this.type;

    cm1.scene.add(this.mesh);

    this.setCannonBody();

    this.cannonBody.addEventListener('collide', playSound);

    const sound = sounds[this.type];
    function playSound(e){
      const strength = e.contact.getImpactVelocityAlongNormal();
      if(strength > 6 && strength < 7){
        // 이벤트가 연속으로 발생되면서 사운드가 중첩되는 것을 방지
        sound.currentTime = 0;
        sound.play();
      };
    }
  }
}