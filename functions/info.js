let info=document.querySelector('.info');
let btn=document.querySelector('.log-btn');
let form1=document.querySelector('.container1');
let form2=document.querySelector('.container2')
let home=document.querySelector('.home');
let register=document.querySelector('.register');
let login=document.querySelector('.login');
btn.addEventListener('click',()=>{
    info.style.display='none';
    form1.style.display='block';
    form2.style.display='none'
   
})
home.addEventListener('click',function(){
    info.style.display='block';
    form1.style.display='none';
    form2.style.display='none'
})

register.addEventListener('click',function(){
    info.style.display='none';
    form1.style.display='none';
    form2.style.display='block';
})
login.addEventListener('click',function(){
    info.style.display='none';
    form1.style.display='block';
    form2.style.display='none';
})