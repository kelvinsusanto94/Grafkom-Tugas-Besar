

let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(
    25,
    window.innerWidth/window.innerHeight,   //Aspek ratio sesuai windows
    1,
    1000
);
let renderer = new THREE.WebGLRenderer();

cam.position.z += 5;    //Melihat ke 0,0,0
scene.background = new THREE.TextureLoader().load("galaxy.jpg");
renderer.setSize(window.innerWidth, window.innerHeight);    //Ukuran dari canvas atau pcture box
document.body.appendChild(renderer.domElement); //Tambahin canvas ke html
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

let light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 0, 1, 1 ).normalize();
scene.add(light);

let geo = new THREE.SphereGeometry(0.5, 32, 32);
let tex = new THREE.TextureLoader().load("earthmap.jpg");
let bump = new THREE.TextureLoader().load("earthbump.jpg");
let spec = new THREE.TextureLoader().load("earthspec.jpg");
let mat = new THREE.MeshPhongMaterial({
    map : tex,
    bumpMap : bump,
    bumpScale : 0.1,
    specularMap : spec,
    specular : 0x808080
});
let mesh = new THREE.Mesh(geo, mat);
mesh.castShadow = true;
mesh.receiveShadow = true;
scene.add(mesh);

let geometry = new THREE.SphereGeometry(0.51, 32, 32);
let texture = new THREE.TextureLoader().load("earthcloudmap.jpg");
let material = new THREE.MeshPhongMaterial({
    map : texture,
    opacity : 0.5,
    transparent : true,
    depthWrite : false
});
let cloudmesh = new THREE.Mesh(geometry, material);
scene.add(cloudmesh);

draw();

function draw(){
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.01;
    cloudmesh.rotation.y += 0.01;
    cloudmesh.rotation.x += 0.01;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}