 //page transition 

 window.onload = ()=>{

const paginas = document.querySelectorAll("#next")
   const transition_el = document.querySelector(".transition")

    setTimeout(()=>{
            transition_el.classList.remove("is-active")
    },500)

    for (let i = 0; i<paginas.length; i++){

        const pagina = paginas[i]
        pagina.addEventListener("click", e =>{
            e.preventDefault()
            let target = e.target.href;
            transition_el.classList.add("is-active")
            setTimeout(()=>{
                window.location.href = target;
            },500)
        })
    }
}


jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });


 /*  landing page work */





tl = gsap.timeline()

tl.from(".text-one",2,{
    delay:1,
    opacity:0,
    y:40,
    ease:Expo.easeInOut
},0.2)


tl.from(".text-two",1.5,{
    delay:1.8,
    opacity:0,
    y:-40,
    ease:Expo.easeInOut
},0.2)

tl.from(".text-two label",1,{
    delay:2,
    opacity:0,
    ease:Expo.easeInOut
},0.2)

tl.from("h2",2,{
    delay:2.5,
    opacity:0,
    x:-60,
    ease:Expo.easeInOut
},0.2)


tl.from(".containermain p",2,{
    delay:3,
    opacity:0,
    y:10,
    ease:Expo.easeInOut
},0.2)




tl.from(".line",2,{
    delay:3.6,
    opacity:0,
    x:-200,
    ease:Expo.easeInOut
},0.2)

tl.from(".tag",2,{
    delay:3.4,
    opacity:0,
    y:-60,
    ease:Expo.easeInOut
},0.2)

