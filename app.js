let btnYes = document.getElementById('yes');
let btnNo = document.getElementById('no');
let wrapper = document.querySelector('.wrapper')

btnYes.addEventListener('click',()=>{
    let video = document.querySelector('.video'); 
    video.style.display = 'block';
    
    wrapper.style.display = 'none';
    document.body.style.background = 'black';
    
    let backSound = new Audio('img/jumpscare-101350.mp3');
    backSound.play();
  });

//getBoundingClientRect : memberi info tentang lebar-tinggi suatu elemen dan posisi dari si elemennya. wajib mempunyai elemen
let btnNoPos = btnNo.getBoundingClientRect();
let bodyPos = wrapper.getBoundingClientRect();
btnNo.addEventListener('click',()=>{
  let customWidth = Math.round(Math.random() * (bodyPos.width - btnNoPos.width));
  let customHeight = Math.round(Math.random() * (bodyPos.height - btnNoPos.height));


  btnNo.style.left = `${customWidth}px`;
  btnNo.style.top = `${customHeight}px`;
});


//Watermark
console.log('Created by Dzulfikar & Barra XI PPLG 2. 28/11/2023');