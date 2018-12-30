var header=document.getElementById('header');

var scrollTop=0;

window.onscroll=function () { 
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    
    var opc = scrollTop/182
    header.style.backgroundColor = 'rgba(222, 24, 27 , '+opc+')'; 
 }





// 京东秒杀的开始
var hours2=document.querySelector('.hours2');
var moment1=document.querySelector('.moment1');
var moment2=document.querySelector('.moment2');
var second1=document.querySelector('.second1');
var second2=document.querySelector('.second2');

// console.log(second2);


var h2=hours2.innerText;
var m1=moment1.innerText;
var m2=moment2.innerText;
var s1=second1.innerText;
var s2=second2.innerText;

//    console.log(h2);
//     console.log(m1);
//     console.log(m2);
//     console.log(s1);
//     console.log(s2);

var timeID= setInterval(function(){
    // 获取元素文本
   
    // console.log(h2);
    // console.log(m1);
    // console.log(m2);
    // console.log(s1);
    // console.log(s2);

    s2--;
    // 如果s2<0 s2=9 s1--;
    if(s2<0){
        s2=9;
        s1--;
    }

    //如果s1<0 s1=5 m2--;
    if(s1<0){
        s1=5;   
        m2--;
    }
    // 如果m2<0 s2=9 m1--;
    if(m2<0){
        m2=9;
        m1--;
    }
    // 如果m1<0 m1=5 h2--;
    if(m1<0){
        m1=5;
        h2--;
    }
   
    // 将重新计算好的重新赋值
    hours2.innerText=h2;
    moment1.innerText=m1;
    moment2.innerText=m2;
    second1.innerText=s1;
    second2.innerText=s2;

    // console.log(h2);
    // console.log(m1);
    // console.log(m2);
    // console.log(s1);
    // console.log(s2);

    if( h2==0 && m1==0 && m2==0 && s1==0 && s2==0){
        clearInterval(timeID);
    }
     
},1000)