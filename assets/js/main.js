document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const shown = nav.style.display === 'flex';
      nav.style.display = shown ? 'none' : 'flex';
      if(!shown){ nav.style.flexDirection = 'column' }
    })
  }
});
