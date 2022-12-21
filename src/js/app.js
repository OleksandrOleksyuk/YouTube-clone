"use strict";
import { API_URL_VIDEO, API_KEY } from "./config";
import { getJSON } from "./helpers";
import view from "./view/view.js";

const loadData = async function () {
  try {
    const data = await getJSON(API_URL_VIDEO);
    data.items.forEach((element) => getChannelIcons(element));
  } catch (error) {
    console.error(error);
  }
};

const getChannelIcons = async function (dataVideo) {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?` +
        new URLSearchParams({
          key: API_KEY,
          part: "snippet",
          id: dataVideo.snippet.channelId,
        })
    );
    const data = await res.json();
    // AGGIUNGO LE ICONE
    dataVideo.abcd = data.items[0].snippet.thumbnails.default.url;
    // RENDERIZZO I MIEI ELEMENTI
    view.render(dataVideo);
  } catch (error) {
    console.error(error);
  }
};
loadData();
