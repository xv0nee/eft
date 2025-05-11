gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
const sensitivity = 0.02
document.addEventListener('mousemove', (e) => {
    let dx = (e.clientX - window.innerWidth / 2) * sensitivity
    let dy = (e.clientY - window.innerHeight / 2) * sensitivity
    gsap.to('.layers-container',{
        duration:1.5,
        x: dx,
        y: dy,
        rotationX: dy / 10,
        rotationY: dx / 10,
        ease: 'power2.out',
    })
    gsap.to('.head-text',{
        duration:1.5,
        x: -dx / 2,
        y: -dy / 2,
        ease: 'power2.out',  
    })
})
ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".wrapper-content",
    smooth: 1.5,
    effects: true
})
gsap.utils.toArray("section").forEach(section => {
    gsap.fromTo(
        section,
        {opacity: 0, y: 25},
        {opacity: 1, y: 0, scrollTrigger: {
            trigger: section,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
        }}
    )
})
const themeChanger = document.querySelector('.theme-change')
themeChanger.addEventListener('click', () => {
    let isLight = localStorage.getItem('theme') == 'light'
    if (isLight){
        localStorage.setItem('theme', 'dark')
        themeChanger.innerHTML = '<i class="fas fa-moon"></i>'
        document.documentElement.style.setProperty('--primary', '#837457')
        document.documentElement.style.setProperty('--secondary', '#b39f77')
        document.documentElement.style.setProperty('--background', '#151413')
        document.documentElement.style.setProperty('--text', '#b0ad96')
        document.querySelector("#EFT").src = "imgs/EFT.png"
        document.querySelector("#getrdy").src = "imgs/getrdyfescape.png"
        document.querySelector("#usecicon").src = "imgs/useclogo.png"
        document.querySelector("#bearicon").src = "imgs/bearlogo.png"
    }else{
        localStorage.setItem('theme', 'light')
        themeChanger.innerHTML = '<i class="fas fa-sun"></i>'
        document.documentElement.style.setProperty('--primary', '#5e6980')
        document.documentElement.style.setProperty('--secondary', '#4f5169')
        document.documentElement.style.setProperty('--background', '#eaebec')
        document.documentElement.style.setProperty('--text', '#4f5169')
        document.querySelector("#EFT").src = "imgs/EFTinv.png"
        document.querySelector("#getrdy").src = "imgs/getrdyfescapeinv.png"
        document.querySelector("#usecicon").src = "imgs/usecblacklogo.png"
        document.querySelector("#bearicon").src = "imgs/bearblacklogo.png"
    }
})
