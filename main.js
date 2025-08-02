// var let const 



document.addEventListener('DOMContentLoaded',()=>{
    const headingOne =document.querySelector('.heading1');
    console.log(headingOne)
})

setTimeout(()=>{
    console.log('settimeout')
},5000)



//  api localstorage
localStorage.setItem('name','Node Js');
sessionStorage.setItem('course',"Javascript");

const local = localStorage.getItem('name')
const session =sessionStorage.getItem('course')

console.log(local,session)


// localStorage.clear()
// sessionStorage.clear()