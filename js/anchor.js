document.addEventListener('scroll', anchorTime);
function anchorTime() {
   if(document.documentElement.scrollTop>2500){
    document.querySelector('.anchor').classList.remove('fadeOut');
    document.querySelector('.anchor').classList.add('fadeIn');
   document.querySelector('.anchor').classList.add('active');
   }
    else{
            document.querySelector('.anchor').classList.remove('fadeIn');
            document.querySelector('.anchor').classList.add('fadeOut');
            document.querySelector('.anchor').classList.remove('active');
            
    }
}