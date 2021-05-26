const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const drawCircle = (x, y, radius) => {
  const angle = Math.PI*2;
  ctx.beginPath();
  ctx.arc(x, y, radius, angle, false);
  ctx.stroke();
}
const topStartX = 250;
const topStartY = 150;
const topRadius = 40;
const middleRadius = 60;
const bottomRadius = 80;

drawCircle(topStartX, topStartY, topRadius);
drawCircle(topStartX, topStartY + topRadius + middleRadius, middleRadius);
drawCircle(topStartX, topStartY + topRadius + middleRadius * 2 + bottomRadius, bottomRadius);

ctx.beginPath();
ctx.arc(topStartX, topStartY + 10, 10, 0, Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(topStartX - 15, topStartY - 15, 5, 0, 2 * Math.PI, false);
ctx.fill();

ctx.beginPath();
ctx.arc(topStartX + 15, topStartY - 15, 5, 0, 2 * Math.PI, false);
ctx.fill();

ctx.beginPath();
ctx.moveTo(topStartX - middleRadius + 5, topStartY + topRadius + middleRadius/2);
ctx.lineTo(topStartX - 100, topStartY - 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(topStartX + middleRadius - 5, topStartY + topRadius + middleRadius/2);
ctx.lineTo(topStartX + 100, topStartY - 50);
ctx.stroke();

ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(topStartX, topStartY - 5);
ctx.lineTo(topStartX - 25, topStartY);
ctx.lineTo(topStartX, topStartY + 5);
ctx.fill();

ctx.fillStyle = 'grey';
ctx.beginPath();
ctx.moveTo(topStartX - topRadius, topStartY - topRadius + 5);
ctx.lineTo(topStartX + topRadius, topStartY - topRadius + 5);
ctx.lineTo(topStartX + topRadius/2, topStartY - topRadius*2);
ctx.lineTo(topStartX - topRadius/2, topStartY - topRadius*2);
ctx.fill();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#33cc33');
document.body.append(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement)

const light = new THREE.DirectionalLight('#ff66ff', .5);
light.position.set(-3, -3, 3);
scene.add(light);


const geometry = new THREE.DodecahedronGeometry(4);
const material = new THREE.MeshPhongMaterial({ color: '#0099cc' })
const dode = new THREE.Mesh(geometry, material);

scene.add(dode);

dode.scale.set(10, 10, 10);
dode.rotation.x = 5;
dode.rotation.y = 10;

const geometry1 = new THREE.SphereGeometry(1)
const material1 = new THREE.MeshPhongMaterial({color: '#f00'});
const sphere = new THREE.Mesh(geometry1, material1);

scene.add(sphere);
sphere.scale.set(10, 10, 10);
sphere.position.x = 10;
sphere.position.y = -50;

camera.position.z = 300;

let angle = 0;

function animate() {
    requestAnimationFrame(animate);

    dode.rotation.x += 0.02;
    dode.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.position.y += 2.5 * Math.sin(angle);
    sphere.position.x += 2.8 * Math.cos(angle);
    angle += Math.PI / 180 * 1.5;

    renderer.render(scene, camera);
}

animate();