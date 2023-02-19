import * as React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJModel } from "react-3d-viewer";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

const Show3D = () => {
  const modelPath =
    "/poly.glb";
  return (
    <div style={{backgroundColor: 'white'}}>
      what
      <GLTFModel src={modelPath}>
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        <DirectionLight
          color={0xff00ff}
          position={{ x: -100, y: 200, z: -100 }}
        />
      </GLTFModel>
    </div>
  );
};

export default Show3D;
