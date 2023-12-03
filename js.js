var td = document.querySelectorAll('td'),
btn = document.querySelector('button'),
div = document.querySelectorAll('div'),
score = document.querySelectorAll('.score'),
s=true ,t=0 , p = [],x = 1 ,done, d=0,v;
    function c (i){
        if(s){
        if(x==1 && td[i].innerHTML === '') {td[i].innerHTML = 'x' 
     x= 0
     p[i] = 0
     t++
    }
      else if(x==0 && td[i].innerHTML === ''){td[i].innerHTML = 'o' 
        x=1
    p[i] = true
    t++
    }
    caller()
    }div[1].innerHTML =""
}
var scores =[0,0]
function S (i){
    scores[i]++
    score[i].innerHTML = scores[i]
}
function f(i){
    if(scores[0] < 4 || scores[1] < 4){ 
if(i==1){S(0);div[0].innerHTML =  `<h2>player one got ${ scores[0]}/4  point${scores[0]>1?'s':' '}</h2>`}; if(i==0){S(1);div[0].innerHTML= `<h2>player two got ${ scores[1]}/4 point${scores[1]>1?'s':' '} </h2> `};if (i==2){div[0].innerHTML = '<h2>🤝draw🤝</h2>'}
s=false
done=false
d++
}if(scores[0] > 3 || scores[1] > 3) {
    div[0].innerHTML = i==1?'<h2>🎉player one is the champion👑</h2>':'<h2>🎉player two is the champion👑</h2>'
d=0
done=true}}
function b(a,b,c){
    td[a].style.background='rgba(255, 255, 0,0.2)'
    td[b].style.background='rgba(255, 255, 0,0.2)'
    td[c].style.background='rgba(255, 255, 0,0.2)'
}
function caller(){
if(p[0] && p[1] && p[2]){f(0);b(0,1,2)}
if(p[3] && p[4] && p[5]){f(0);b(3,4,5)}
if(p[6] && p[7] && p[8]){f(0);b(6,7,8)}
if(p[0] && p[3] && p[6]){f(0);b(0,3,6)}
if(p[1] && p[4] && p[7]){f(0);b(1,4,7)}
if(p[2] && p[5] && p[8]){f(0);b(2,5,8)}
if(p[0] && p[4] && p[8]){f(0);b(0,4,8)}
if(p[2] && p[4] && p[6]){f(0);b(2,4,6)}

if(p[0]==0 && p[1]==0 && p[2]==0){f(1);b(0,1,2)}
if(p[3]==0 && p[4]==0 && p[5]==0){f(1);b(3,4,5)}
if(p[6]==0 && p[7]==0 && p[8]==0){f(1);b(6,7,8)}
if(p[0]==0 && p[3]==0 && p[6]==0){f(1);b(0,3,6)}
if(p[1]==0 && p[4]==0 && p[7]==0){f(1);b(1,4,7)}
if(p[2]==0 && p[5]==0 && p[8]==0){f(1);b(2,5,8)}
if(p[0]==0 && p[4]==0 && p[8]==0){f(1);b(0,4,8)}
if(p[2]==0 && p[4]==0 && p[6]==0){f(1);b(2,4,6)}
if(t==9 && s== true){f(2)}
}
btn.addEventListener('click' , function () {
    for(let i = 0 ; i < 9; i++){
        td[i].innerHTML = ''
        td[i].style.background=''
    }
    p=[]
    div[0].innerHTML = ''
    t=0
s=true
if(d==1||d==3||d==5||d==7||d==9||d==11){x=0
}else{x=1}
div[1].innerHTML =x==0?"player 2 it's your turn":"player 1 it'syour turn"
if(done){
        scores =[0,0]
        score[0].innerHTML = '0'
        score[1].innerHTML = '0'
    }})
