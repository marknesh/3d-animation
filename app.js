const container=document.querySelector('.container')

const card=document.querySelector('.card')

const title=document.querySelector('.info h1')
const image=document.querySelector('.audi img')
const list=document.querySelector('.details ')

container.addEventListener('mousemove',(e)=>{

   let xAxis=(window.innerWidth/2 - e.pageX)/20
   let yAxis=(window.innerHeight/2 - e.pageY)/20

   card.style.transform=`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})

container.addEventListener('mouseenter',(e)=>{
   title.style.transform='translateZ(100px)'
  image.style.transform=' translateZ(100px) rotateZ(-10deg)'
  list.style.transform='translateZ(100px)'

    card.style.transition='none'
 })


container.addEventListener('mouseleave',(e)=>{

    card.style.transition='all 0.5s ease'
    title.style.transform='translateZ(0px)'
    image.style.transform=' translateZ(0px) rotateZ(0deg)'
    list.style.transform='translateZ(0px)'

    card.style.transform=`rotateX(0deg) rotateY(0deg)`
 })