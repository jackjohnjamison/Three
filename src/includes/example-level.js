/*
To do - move object dimensions to variables & have the texture repeats determined by those rather than set each chuffing thing manually.
*/

import {
	TextureLoader,
  MeshBasicMaterial,
  Mesh,
  BoxGeometry,
  RepeatWrapping
} from "../../node_modules/three";

const loader = new TextureLoader();


//--------------------------------------------------------------------------------
// wall1
const wall1Geometry = new BoxGeometry(80, 320, 1200); //width, height, depth
const wall1Materials = [
  new MeshBasicMaterial({map: loader.load('dist/images/bedrock.png')}),
  new MeshBasicMaterial({map: loader.load('dist/images/bedrock.png')}),
  new MeshBasicMaterial({map: loader.load('dist/images/bedrock.png')}),
  new MeshBasicMaterial({map: loader.load('dist/images/bedrock.png')}),
  new MeshBasicMaterial({map: loader.load('dist/images/bedrock.png')}),
  new MeshBasicMaterial({map: loader.load('dist/images/bedrock.png')})
];

for (let i=0; i<6; i++) {
  switch(i) {
    // top
    case 2:
      wall1Materials[i].map.wrapS = RepeatWrapping;
      wall1Materials[i].map.wrapT = RepeatWrapping;
      wall1Materials[i].map.repeat.set( 1, 1 );
      break;
    // bottom
    case 3:
      wall1Materials[i].map.wrapS = RepeatWrapping;
      wall1Materials[i].map.wrapT = RepeatWrapping;
      wall1Materials[i].map.repeat.set( 1, 1 );
      break;
    // short sides
    case 4:
      wall1Materials[i].map.wrapS = RepeatWrapping;
      wall1Materials[i].map.wrapT = RepeatWrapping;
      wall1Materials[i].map.repeat.set( 0.25, 1 );
      break;
    case 5:
      wall1Materials[i].map.wrapS = RepeatWrapping;
      wall1Materials[i].map.wrapT = RepeatWrapping;
      wall1Materials[i].map.repeat.set( 0.25, 1 );
      break;
    // wide sides
    default: 
    wall1Materials[i].map.wrapS = RepeatWrapping;
    wall1Materials[i].map.wrapT = RepeatWrapping;
    wall1Materials[i].map.repeat.set( 5, 1 );
  }
}

const wall1 = new Mesh(wall1Geometry, wall1Materials);
wall1.position.y = -40;
wall1.position.x = 200;


export { wall1 };