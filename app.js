//ตำแหน่งลูกเต๋า บน grid ขนาด 3x3
//1     4
//2     3,5
//3     0,4,8
//4     0,2,6,8
//5     0,2,4,6,8
//6     0,2,3,5,6,8

let wd=[[4],[3,5],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]]
let btn=document.getElementById('random')
let head_status=document.getElementById('header-status')
let whitedot1=document.getElementsByClassName('whitedot-1')
let whitedot2=document.getElementsByClassName('whitedot-2')

function randomLooktao(){
    let lt1Value=Math.floor(Math.random()*6)
    let lt2Value=Math.floor(Math.random()*6)
    
    for (let i=0; i<whitedot1.length; i++) {
        whitedot1[i].setAttribute('class','whitedot-1')
    }
    for (let i=0; i<whitedot2.length; i++) {
        whitedot2[i].setAttribute('class','whitedot-2')
    }

    wd[lt1Value].forEach(element => {
        whitedot1[element].classList.add('appear')
    });
    wd[lt2Value].forEach(element => {
        whitedot2[element].classList.add('appear')
    });
    if (lt1Value===lt2Value){
        head_status.innerHTML='Draw'
    }else if (lt1Value>lt2Value) {
        head_status.innerHTML='Player1 Win'
    }else{
        head_status.innerHTML='Player2 Win'
    }
}

btn.addEventListener('click', randomLooktao)
