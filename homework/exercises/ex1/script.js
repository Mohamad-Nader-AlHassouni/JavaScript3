"use strict";

const api = "https://www.randomuser.me/api";
const XHR = new XMLHttpRequest();
XHR.open("GET", api);
XHR.send();
const btn = document.getElementById("button");

const getData = () => {
  console.log(JSON.parse(XHR.response));

  axios
    .get(api)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => console.error(err));
};

btn.addEventListener("click", getData);
