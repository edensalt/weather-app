import getWeather from "./weather-data";
import { format, parse } from "date-fns";

const CurrentDateLayout = async function () {
  const parent = document.querySelector("#current-date");

  parent.innerHTML = "";

  const dateUpdate = document.createElement("div");
  dateUpdate.innerHTML = "Last updated:";
  dateUpdate.classList.add("italic-text");

  const dayTime = document.createElement("div");
  dayTime.setAttribute("id", "day-time");

  const date = document.createElement("div");
  date.setAttribute("id", "date");

  parent.appendChild(dateUpdate);
  parent.appendChild(dayTime);
  parent.appendChild(date);
};

const DateReformat = function (date) {
  const dateString = date;
  const dateObj = parse(dateString, "yyyy-MM-dd HH:mm", new Date());
  const formattedDate = format(dateObj, "LLLL d, yyyy");
  return formattedDate;
};

const Time = function (date) {
  const dateString = date;
  const dateObj = parse(dateString, "yyyy-MM-dd HH:mm", new Date());
  const formattedDate = format(dateObj, "h:mm aaa");
  return formattedDate;
};

const DayOfWeek = function (date) {
  const dateString = date;
  const dateObj = parse(dateString, "yyyy-MM-dd HH:mm", new Date());
  const formattedDate = format(dateObj, "cccc");
  return formattedDate;
};

const RefreshCurrentDate = async function (city) {
  await CurrentDateLayout();

  const dayTime = document.querySelector("#day-time");
  const date = document.querySelector("#date");

  const textLoad = `<div class="text-loading"><span class="text-load dot-1">.</span><span class="text-load dot-2">.</span><span class="text-load dot-3">.</span></div>`


  dayTime.innerHTML = textLoad;
  date.innerHTML = textLoad;

  getWeather(city)
    .then((value) => {
      const dateInput = value.current.last_updated;
      const lineOne = `${DayOfWeek(dateInput)} ${Time(dateInput)}`;
      const lineTwo = `${DateReformat(dateInput)}`;
      dayTime.innerHTML = lineOne;
      date.innerHTML = lineTwo;
    })
    .catch((error) => {
      temp.innerHTML = `Error: ${error}`;
      console.log(error);
    });
};

export default RefreshCurrentDate;
