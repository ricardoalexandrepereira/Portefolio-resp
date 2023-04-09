gsap.registerPlugin(Flip);

let layouts = ["finalintro","plain","columns","grid"],
container = document.querySelector('.containerintro'),
curLayout = 0

function nextState(){
    const state = Flip.getState('.letter, .for, .gsap')

    container.classList.remove(layouts[curLayout]);
    curLayout = (curLayout + 1) % layouts.length;
    container.classList.add(layouts[curLayout]);

    Flip.from(state,{
        absolute:true,
        stagger:0.07,
        duration:0.7,
        ease:"power2.inOut",
        spin:curLayout === 0,
        simple:true,
        onEnter:(elements, animation)=>gsap.fromTo(elements, animation),
        onLeave: elements => gsap.to(elements,{opacity:0}),
        
    });

    gsap.delayedCall(curLayout === 0 ? 3.5 : 1.8, nextState)
}

gsap.delayedCall(1, nextState)

gsap.fromTo('.containerintro',
{opacity:1,duration:15},
{
    opacity:0,
    duration:2,
    delay:10
})