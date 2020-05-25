let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(
    25,
    window.innerWidth/window.innerHeight,   //Aspek ratio sesuai windows
    1,
    1000
);
let renderer = new THREE.WebGLRenderer();

cam.position.z += 5;    //Melihat ke 0,0,0
renderer.setSize(window.innerWidth, window.innerHeight);    //Ukuran dari canvas atau pcture box
document.body.appendChild(renderer.domElement); //Tambahin canvas ke html

let controls = new THREE.OrbitControls(cam, renderer.domElement);

let loader = new THREE.CubeTextureLoader();
let skybox = loader.load([
    'indigo_ft.jpg',
    'indigo_bk.jpg',
    'indigo_up.jpg',
    'indigo_dn.jpg',
    'indigo_rt.jpg',
    'indigo_lf.jpg',
])
scene.background = skybox;

function draw(){
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();