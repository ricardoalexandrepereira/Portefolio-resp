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

setTimeout(()=>{
    document.querySelector('#alerta').style.display = 'none';
},5000)



var text = document.getElementById('text');
addEventListener('scroll', function(){
    var value = scrollY;
    text.style.marginBottom = value * 4 +'px';
})
