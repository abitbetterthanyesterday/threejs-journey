import {Scene, Mesh, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial} from 'three'

// Scene
const scene = new Scene()

// Red Cube
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({color: '#ff0000'})
const mesh = new Mesh(geometry, material)
scene.add(mesh)

// Sixes
const sizes = {
	height: 800,
	width: 600,
}

// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = .5
camera.position.y =1
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new WebGLRenderer({
	canvas,
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
