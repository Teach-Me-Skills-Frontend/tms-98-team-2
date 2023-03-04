let clock = document.querySelector('.clock');

//Создаем элемент секунд, минуты и часы
function time() {
   //Создаем дату чтобы знать сегодняшее время
let date = new Date ();
let hours = date.getHours();
let minute = date.getMinutes();
let sec = date.getSeconds();

//Подключаем часы чтобы было видно их на сайте
clock.innerHTML = `${hours}:${minute}:${sec}`;
}
//Обновление часов каждую секунду
setInterval(time, 1000);