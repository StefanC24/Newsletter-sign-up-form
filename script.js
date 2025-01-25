const pop_up = document.querySelector('.pop_up')
const email_input = document.getElementById('input_email')
function validateInput(){
    document.getElementById('error').textContent=''

    const email = document.getElementById('input_email').value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true
    const card1 = document.getElementById('card1')
    const popup = document.getElementById('card2')
    const screenWidth = window.innerWidth;

    if(!email){
      document.getElementById('error').textContent='Valid email required'
      isValid = false
      // card1.classList.add('card1')
      email_input.style.color = 'hsl(4, 100%, 67%)'
      email_input.style.backgroundColor = 'hsl(5, 94.90%, 92.40%)'
      
    } 
    else if (!emailRegex.test(email)) {
      document.getElementById('error').textContent = 'Valid email required';
      email_input.style.color = 'hsl(4, 100%, 67%)'
      email_input.style.backgroundColor = 'hsl(5, 94.90%, 92.40%)'
      email_input.style.borderColor = 'hsl(5, 85.40%, 83.90%)'
    }
    else{
      card1.classList.add('card1')
      popup.classList.remove('card2')
      popup.classList.add('card3')
    }
  }

  function revert(){
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    card1.classList.remove('card1')
    card2.classList.remove('card3')
    pop_up.style.display = 'none';
    document.getElementById('input_email').value=''
    email_input.style.backgroundColor = 'hsl(0, 0%, 100%)'
  }

  function backgroundChange() {
    const background = document.getElementById('background');
    const img = document.getElementById('right_img');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      img.src = 'assets/images/illustration-sign-up-mobile.svg';
    }
    else{
      img.src = 'assets/images/illustration-sign-up-desktop.svg';

    }
  }

backgroundChange();
window.addEventListener('resize', backgroundChange);