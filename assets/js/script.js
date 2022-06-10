const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;

  if (hr >= 6 && hr < 12) {
    document.body.style.background =
      "linear-gradient(120deg, #2980B9, #6DD5FA, #FFFFFF)";
  } else if (hr >= 12 && hr <= 18) {
    document.body.style.background =
      "linear-gradient(120deg, #ffe259, #ffa751)";
  } else {
    document.body.style.background =
      "linear-gradient(120deg, #0F2027, #203A43, #2c5364)";
  }
});
