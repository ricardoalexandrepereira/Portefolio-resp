/*abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click',()=>{
    menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace('bi-list','bi-x')
    : menuMobile.classList.replace('bi-x','bi-list');
    body.classList.toggle('menu-nav-active')

})
/*fecha o menu quando clicar em algum item e muda o icon para list*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item =>{
    item.addEventListener('click',()=>{
        if(body.classList.contains('menu-nav-active')){
            body.classList.remove('menu-nav-active')
            menuMobile.classList.replace('bi-x','bi-list')
        }
    })
})

const item = document.querySelectorAll("[data-anime]");

const animeScroll = ()=>{
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    
    item.forEach(element =>{
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate")
        }
    });
}
animeScroll();

window.addEventListener('scroll', ()=>{
    animeScroll();
})

/*ativar o loading*/

const btnEnviar = document.querySelector('#btn-enviar');
const loader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener('click',()=>{
    loader.style.display = 'block';
    btnEnviar.style.display = 'none';
})

/*retirar mensagem depois de 5segundos*/

/*setTimeout(()=>{
    document.querySelector('#alerta').style.display = 'none';
},5000)*/



/*var text = document.getElementById('text');
addEventListener('scroll', function(){
    var value = scrollY;
    text.style.marginBottom = value * 4 +'px';
})*/


//three

const banner = document.querySelector('.banner')

var scene = new THREE.Scene();


    var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    camera.position.z = 5;

    var renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(window.innerWidth,window.innerHeight);

    banner.appendChild(renderer.domElement)

    window.addEventListener('resize',()=>{
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
    })

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

   


    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7})
    var mesh = new THREE.Mesh(geometry, material);
    
    scene.add(mesh)

    meshX = 10;
    for(var i = 0; i < 15; i++){
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x += (Math.random() - 0.5)* 10;
        mesh.position.y += (Math.random() - 0.5)* 10;
        mesh.position.z += (Math.random() - 0.5)* 10;
        scene.add(mesh);
        meshX+=1;
    }

  


    var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
    light.position.set(0,0,0);
    scene.add(light);

    var light = new THREE.PointLight(0xFFFFFF, 2, 1000)
    light.position.set(0,0,25);
    scene.add(light);


var render = function(){
    requestAnimationFrame(render);

    
    renderer.render(scene, camera)

}

function onMouseMove(event){
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 -1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 +1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for(var i = 0; i < intersects.length; i++){
        
        this.tl = new TimelineMax()
        this.tl.to(intersects[i].object.scale, 1, {x:2, ease: Expo.easeOut})
        this.tl.to(intersects[i].object.scale, .5, {y:.5, ease: Expo.easeOut})
        this.tl.to(intersects[i].object.position, .5, {x:2, ease: Expo.easeOut})
        this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut})
    }
}



render()



window.addEventListener('mousemove', onMouseMove)




var texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'BOOTSTRAP', 'NODE js', 'SASS',
    'EJS', 'HANDLEBARS', 'MONGO DB',
    'REACT js', 'FIGMA' , 'WORDPRESS', 
    'GIT', 'EXPRESS', 'FIREBASE'
];
var tc = TagCloud('.Sphere', texts,{
    radius:200, 
    maxSpeed:'normal',
    initSpeed:'normal',
    direction:135,
    keep:true,
    

});
var color = '#071a31'
document.querySelector('.Sphere').style.color = color