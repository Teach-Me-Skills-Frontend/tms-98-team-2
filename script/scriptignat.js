let clock = document.querySelector('.clock');

//Создаю значения часов
function time() {
   let date = new Date();
   let hours = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds();
   let year = date.getFullYear();
   let mounch = date.getMonth();
   let day = date.getDate();

//Устанавливаю часы
   clock.innerHTML = `${hours}:${min}:${sec} 
   ${year}:${mounch}:${day}`
}
//Таймер обновления
setInterval (time, 1000);