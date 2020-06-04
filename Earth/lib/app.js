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
controls.addEventListener('change', renderer);
controls.minDistance = 500;
controls.maxDistance = 1000;

let background = new THREE.CubeTextureLoader();
let skybox = background.load([
    'indigo_ft.jpg',
    'indigo_bk.jpg',
    'indigo_up.jpg',
    'indigo_dn.jpg',
    'indigo_rt.jpg',
    'indigo_lf.jpg',
])
scene.background = skybox;

let cafe;
let loader = new THREE.GLTFLoader().load('final cafe.gltf', function(result){
    var object = gltf.scene;				
	gltf.scene.scale.set( 2, 2, 2 );			   
	gltf.scene.position.x = 0;				    //Position (x = right+ left-) 
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)
	
	scene.add( gltf.scene );
});

function draw(){
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();