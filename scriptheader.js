let clock = document.querySelector('.clock');

//Создаем элемент секунд, минуты и часы
function time() {
   //Создаем дату чтобы знать сегодняшее время
let date = new Date ();
let hours = date.getHours();
let minute = date.getMinutes();
let sec = date.getSeconds();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate()

//Подключаем часы чтобы было видно их на сайте
clock.innerHTML = `${hours}:${minute}:${sec}
${year}:${month}:${day}`;

}
//Обновление часов каждую секунду
setInterval(time, 1000);




