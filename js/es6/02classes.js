/*
ES2015 classes are a simple sugar over the prototype-based OO pattern.
Having a single convenient declarative form makes class patterns easier to use,
and encourages interoperability. Classes support prototype-based inheritance,
super calls, instance and static methods and constructors.
*/

class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.isMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    // ...
  }

  update(camera) {
    // ...
    super.update();
  }

  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
