item = document.querySelectorAll('.header__item');
var cout = 0;

for(let i=0;i<3;i++){
    item[i].style.display = 'inline-flex';
}

document.querySelector('.header__arrow').onclick = function(){
    for(let i=0;i<item.length;i++){
        if(item[i].style.display == 'inline-flex') cout++;
    }
    console.log(cout);
    if(cout == 5){
                    item[3].classList.remove('slideInRight');
                    item[3].classList.add('slideOutLeft');
                    item[4].classList.remove('slideInRight');
                    item[4].classList.add('slideOutLeft');
                    setTimeout(closeModal, 1000);
    }

    else{
        item[3].classList.remove('slideOutLeft');
        item[3].classList.add('slideInRight');
        item[4].classList.remove('slideOutLeft');
        item[4].classList.add('slideInRight');
        showModal();
    }

    cout = 0;
}



function closeModal(){
    item[3].style.display = 'none';
    item[4].style.display = 'none';
}

function showModal(){
    item[3].style.display = 'inline-flex';
    item[4].style.display = 'inline-flex';
}

