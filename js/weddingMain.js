function go () {
    document.getElementById ('form__name').innerHTML = (document.getElementById ('name').value + ',' + '<br>');
    document.getElementById ('form__ok').style.top = '0px';
};
let formClose = document.getElementById ('form__ok');
formClose.onclick = () => {
    document.getElementById ('form__ok').style.top = '1000px'
};

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

//Закрытие формы после отправки и очистка полей
function clear () {
    document.getElementById ('name').value = '';
    document.getElementById ('email').value = '';
    document.getElementById ('phone').value = '';
    document.querySelector ('.wedding__form').style.left = '-1000px';
    document.querySelector('.wedding__form__bg').style.opacity = '0';
    document.querySelector('.wedding__form__bg').style.visibility = 'hidden';
};

//Закрытие формы по крестику
document.getElementById('wedding__form__close').onclick = () => {
    document.querySelector ('.wedding__form').style.left = '-1000px';
    document.querySelector('.wedding__form__bg').style.opacity = '0';
    document.querySelector('.wedding__form__bg').style.visibility = 'hidden';
}

//Закрытие формы по клику на фон
document.querySelector('.wedding__form__bg').onclick = () => {
    document.querySelector ('.wedding__form').style.left = '-1000px';
    document.querySelector('.wedding__form__bg').style.opacity = '0';
    document.querySelector('.wedding__form__bg').style.visibility = 'hidden';
}

//Открытие формы по нажатию
document.getElementById('wedding__form__open').onclick = () => {
    document.querySelector ('.wedding__form').style.left = '50%';
    document.querySelector('.wedding__form__bg').style.opacity = '0.6';
    document.querySelector('.wedding__form__bg').style.visibility = 'visible';
}

//Открытие по клику на иконку
document.getElementById('wedding__form__open2').onclick = () => {
    document.querySelector ('.wedding__form').style.left = '50%';
    document.querySelector('.wedding__form__bg').style.opacity = '0.6';
    document.querySelector('.wedding__form__bg').style.visibility = 'visible';
}