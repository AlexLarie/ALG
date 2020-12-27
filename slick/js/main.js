let first = document.querySelectorAll('.first');
let h = [];
//Добавляем прослушивание клика у элементов с классом .first
for (i=0; i<first.length; i++){
    h[i] = first[i];
    h[i].addEventListener('click' , addSlider);
}

function addSlider () {
    document.querySelector('.work').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'block';
    document.querySelector('.wrapper2').style.display = 'block';
}

let closeSlider = document.querySelector('.close__slider');
closeSlider.onclick = removeSlider;

function removeSlider () {
    document.querySelector('.work').style.display = 'grid';
    document.querySelector('.wrapper').style.display = 'none';
    document.querySelector('.wrapper2').style.display = 'none';
}

