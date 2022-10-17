const cardPage = document.querySelector('.cardPage');

const physical = document.querySelector('.physical');

const virtual = document.querySelector('.virtual');

const cards_nav = document.querySelector('.cards_nav');

const virtualCard = document.querySelector('.virtualCard');

const creditCard = document.querySelector('.creditCard');

const physicalcard_reg = document.querySelector('.physicalcard_reg');

const virtualcard_reg = document.querySelector('.virtualcard_reg');

const greenBar = document.querySelector('.greenBar');

const personalInfo = document.querySelector('#personalInfo');

const getCardNow = document.querySelector('.getCardNow');

const navBar= document.querySelector('.navBar');

const heading = document.querySelector('.heading');

const arrow_left = document.querySelector('.fa-arrow-left');

const input = document.querySelectorAll('input');

const male = document.querySelector('#male');

const female = document.querySelector('#female');

const submit = document.querySelector('#submit');

const successful = document.querySelector('.successful');


window.onload = ()=>{
  const loading_app = document.querySelector('.loading_app');
  
  cardPage.style.display = 'none';
  
  getCardNow.style.display = 'none';
  
  navBar.style.display = 'none';
 
  greenBar.style.display = 'none';
  
  heading.style.display = 'none';
 

  setTimeout(()=>{
    loading_app.style.display = 'none';
  cardPage.style.display = 'block';
  navBar.style.display = 'flex';
  heading.style.display = 'block';
  greenBar.style.display = 'block';
  getCardNow.style.display = 'block';
  },2000);
}

cards_nav.style.color = 'var(--green)';


virtualcard_reg.addEventListener('click',()=>{
  
  greenBar.style.left = '11rem';
 

 virtual.style.right = '0rem';

 
physical.style.left = '-20rem';

});


physicalcard_reg.addEventListener('click',()=>{
  
  greenBar.style.left = '1.6rem';
 
 physical.style.left = '0rem';
   
   virtual.style.right = '20rem'; 

});


getCardNow.addEventListener('click',()=>{
  if (virtual.style.right === '0rem') {
    personalInfo.style.display = 'block';
    navBar.style.display = 'none';
    getCardNow.style.display = 'none';
  } else {
    personalInfo.style.display = 'none';
   navBar.style.display = 'flex';
   getCardNow.style.display = 'block';
  }
});

arrow_left.addEventListener('click',()=>{
  personalInfo.style.display = 'none';
   navBar.style.display = 'flex';
    getCardNow.style.display = 'block';
});

male.addEventListener('click',()=>{
  e.preventDefault();
  if (female.style.backgroundColor === 'rgba(232, 232, 232, 1)') {
  male.style.backgroundColor = 'greenyellow';
  female.style.backgroundColor = 'rgba(232,232,232,1)';
  } else if(female.style.backgroundColor === 'greenyellow'){
    male.style.backgroundColor = 'greenyellow';
  female.style.backgroundColor = 'rgba(232,232,232,1)';
  }
  else {
  male.style.backgroundColor = 'rgba(232, 232, 232, 1)';
    male.style.backgroundColor = 'greenyellow';
  }
});

female.addEventListener('click',(e)=>{
  e.preventDefault();
  if (male.style.backgroundColor === 'rgba(232, 232, 232, 1)') {
  female.style.backgroundColor = 'greenyellow';
  male.style.backgroundColor = 'rgba(232,232,232,1)';
  }else if (male.style.backgroundColor === 'greenyellow') {
    female.style.backgroundColor = 'greenyellow';
    male.style.backgroundColor = 'rgba(232,232,232,1)';
  }
  else {
  female.style.backgroundColor = 'rgba(232, 232, 232, 1)';
  male.style.backgroundColor = 'greenyellow';
  }
});
submit.addEventListener('click',(e)=>{
  e.preventDefault();
/*  for (var i = 0; i < input.length; i++) {
    console.log(input[3].length);
    if (input[0].value > 1 &&  input[1].value > 1 &&
        input[2].value > 1) {
      console.log('submitted');
    } else {
      console.log('retry');
    }
  }*/
  personalInfo.style.display = 'none';
  successful.style.display = 'block';
  heading.style.display = 'none';
  
  setTimeout(()=>{
    successful.style.display = 'none';
   personalInfo.style.display = 'none'; 
   heading.style.display = 'block';
   navBar.style.display = 'flex';
  getCardNow.style.display =   'block';
  },1500);
  
});

