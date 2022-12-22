"use strict";
import { API_URL_VIDEO, API_KEY, API_URL_ICONS } from "./config";
import { getJSON } from "./helpers";
import view from "./view/view.js";

// == ELEMENT DOM
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const menu = document.getElementById("aside-menu-small-display");

const btnOpenInput = document.getElementById("btn-input-mobile");
const btnCloseInput = document.getElementById("close-input");
const inputMobile = document.getElementById("input-mobile");

// == CHIAMATA PRIMA API
const loadData = async function () {
  try {
    const data = await getJSON(API_URL_VIDEO);
    data.items.forEach((element) => getChannelIcons(element));
  } catch (error) {
    console.error(error);
  }
};
// CHIAMATA SECONDA API PERCHÉ HO BISOGNO DELLA ICONA
const getChannelIcons = async function (dataVideo) {
  try {
    const data = await getJSON(
      API_URL_ICONS +
        new URLSearchParams({
          key: API_KEY,
          part: "snippet",
          id: dataVideo.snippet.channelId,
        })
    );
    // AGGIUNGO LE ICONE
    dataVideo.abcd = data.items[0].snippet.thumbnails.default.url;
    // RENDERIZZO I MIEI ELEMENTI
    view.render(dataVideo);
  } catch (error) {
    console.error(error);
  }
};
loadData();

// == EVENT LISTENER RESPONSIVE
btnClose.addEventListener("click", function () {
  menu.classList.add("hidden");
});
btnOpen.addEventListener("click", function () {
  console.log(this);
  menu.classList.remove("hidden");
});

const btn = document.getElementById("btn-open-tablet");
btn.addEventListener("click", function () {
  console.log(this);
  menu.classList.remove("hidden");
});

btnOpenInput.addEventListener("click", function () {
  inputMobile.classList.remove("hidden");
  inputMobile.classList.add("flex");
});

btnCloseInput.addEventListener("click", function () {
  console.log(this);
  inputMobile.classList.remove("flex");
  inputMobile.classList.add("hidden");
});
