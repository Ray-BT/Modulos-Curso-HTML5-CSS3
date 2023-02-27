const area1 = document.getElementById('div1')
const area2 = document.getElementById('div2')
const area3 = document.getElementById('div3')

area1.addEventListener('mouseenter', entrar1)
area1.addEventListener('mouseout', sair1)

area2.addEventListener('mouseenter', entrar2)
area2.addEventListener('mouseout', sair2)

area3.addEventListener('mouseenter', entrar3)
area3.addEventListener('mouseout', sair3)

function entrar1() {
    area1.style.background = 'rgba(0, 60, 255, 0.699)'
}
function sair1(){
    area1.style.background = 'rgba(0, 60, 255, 0.349)'    
}
function entrar2() {
    area2.style.background = 'rgba(241, 241, 7, 0.658)'
}

function sair2() {
    area2.style.background = 'rgba(255, 255, 0, 0.349)'
}

function entrar3(){
    area3.style.background = 'rgba(145, 142, 142, 0.349)' 
}

function sair3() {
    area3.style.background = 'rgba(14, 13, 13, 0.349)'
}