function changeTime(){
    //Получаем метки даты сейчас и нужной даты
    const newTime = new Date('december 2020 00:00:00');
    const time = new Date();
    //Получаем разницу в мс
    const timerTime = newTime - time;
    //Вычисляем кол-во дней
    const days = Math.floor(timerTime/1000/60/60/24);
    //Вычисляем кол-во часов
    const hours = Math.floor((timerTime/1000/60/60)%24);
    //Вычисляем кол-во минут
    const minutes = Math.floor((timerTime/1000/60)%60);
    //Вычисляем кол-во секунд
    const seconds = Math.floor((timerTime/1000)%60);
    //Получаем элементы для вывода
    let d1 = document.getElementById('days');
    let h1 = document.getElementById('hours');
    let m1 = document.getElementById('minutes');
    let s1 = document.getElementById('seconds');
    d1.style.color = 'red';
    h1.style.color = 'red';
    m1.style.color = 'red';
    s1.style.color = 'red';
    //Назначам вывод, если число одно - дописываем перед ним 0
    d1.innerText = days;
    if (hours < 10){
        h1.innerText = '0' + hours;
    } else {
        h1.innerText = hours;
    }
    if (minutes < 10){
        m1.innerText = '0' + minutes;
    } else {
        m1.innerText = minutes;
    }
    if (seconds < 10){
        s1.innerText = '0' + seconds;
    } else {
        s1.innerText = seconds;
    }
}
//Запускаем таймер с интервалом 1с
setInterval(changeTime,1000)
//Запускаем функцию что бы при загрузке данные уже были на странице
changeTime()
//Делаем заполняющийся элемент