let h1 = document.getElementById ('h1');
let d1 = document.getElementById ('main');
let d2 = document.getElementById ('portfolio');
let d3 = document.getElementById ('services');
let d4 = document.getElementById ('contacts');
let h2 = document.querySelectorAll ('.text');
let t1 = document.querySelectorAll ('.title');
let form = document.querySelectorAll ('.contact__black');
let l1 = document.querySelector ('.header__label');
let m1 = document.getElementById ('menu__active');
let menu = document.querySelectorAll ('.menu__link');
let l2 = document.querySelector ('.menu__link');
let header = document.querySelector('.header');
let link = document.querySelectorAll('.link');
let num = 0;
h1.onchange = () => {
    if (h1.checked){
        num = 1;
        d1.classList.add ('bgc');
        d2.classList.add ('bgc');
        d3.classList.add ('bgc');
        d4.classList.add ('bgc');
        header.style.backgroundColor = 'rgba(86, 120, 122)';
        for (i=0;i<h2.length;i++){
            h2[i].style.color = 'black';
        }
        for(i=0;i<t1.length;i++){
            if (i==1){
                continue
            }
            t1[i].style.color = 'black';
        }
        l1.innerHTML = 'Светлая тема';
        if(num==1) {
            for (i=0;i<menu.length;i++){
                menu[i].style.backgroundColor = 'rgba(86, 120, 122)';
            }
        };
        // link.mousover = function () {
        //     for (i=0;i<link.length;i++){
        //         link[i].style.color = 'black';
        //     }
        // }
    }
    else {
        num = 0;
        d1.classList.remove ('bgc');
        d2.classList.remove ('bgc');
        d3.classList.remove ('bgc');
        d4.classList.remove ('bgc');
        for (i=0;i<h2.length;i++){
            h2[i].style.color = 'white';
        }
        for(i=0;i<t1.length;i++){
            if (i==1){
                continue
            }
            t1[i].style.color = 'white';
        }
        l1.innerHTML = 'Тёмная тема';
        header.style.backgroundColor = 'rgba(156, 156, 156';
        if (num==0){
            for (i=0;i<menu.length;i++){
                menu[i].style.backgroundColor = 'rgba(156, 156, 156';
            }
        };
    };
};
for (i=0;i<menu.length;i++){
    menu[i].onclick = () => {
        m1.checked = false;
    }
};
function go () {
    document.getElementById ('form__name').innerHTML = (document.getElementById ('name').value + ',' + '<br>');
    document.getElementById ('form__ok').style.top = '0px';
};
let formClose = document.getElementById ('form__ok');
formClose.onclick = () => {
    document.getElementById ('form__ok').style.top = '1000px'
};
function clear () {
    document.getElementById ('name').value = '';
    document.getElementById ('email').value = '';
    document.getElementById ('phone').value = '';
};