"use strict";

// import * as module from "./module";
import { API_URL_VIDEO, API_KEY } from "./config";
import { getJSON } from "./helpers";
import view from "./view/view";
// console.log(module.state);
const state = {
  items: [],
};

const createObject = function (data) {
  return data.items.map((element) => {
    console.log(element.channelThumbnail); // BUG
    ///// ===== creo quanti giorni fa è stato publicato il video
    const publishedAt =
      (Date.now() - Date.parse(new Date(element.snippet.publishedAt))) /
      (1000 * 60 * 60);
    const dayAt = Math.floor(publishedAt / 24);
    const hourAt = Math.floor(publishedAt);
    const strTimePassated =
      dayAt >= 1
        ? `${dayAt} giorn${dayAt === 1 ? "o" : "i"} fa`
        : `${hourAt} ore fa`;

    //// ====== RITORNO IL MIO OGGETTO FINALE
    return {
      id: element.id,
      imageUrl: element.snippet.thumbnails.high.url,
      title: element.snippet.title,
      channelTitle: element.snippet.channelTitle,
      publishedAt: strTimePassated,
      viewCount: element.statistics.viewCount,
    };
  });
  //   console.log(data.items);
};

const loadData = async function () {
  try {
    const data = await getJSON(API_URL_VIDEO);

    // aggiungo le icone al mio oggetto data
    data.items.forEach(async (el) => {
      const data = await getChannelIcons(el);
      console.log(data);
      return data;
    });
    console.log(data.items);
    console.log(state.items);
    state.items = [...createObject(data)];
    // RENDERIZZO I MIEI ELEMENTI
    state.items.forEach((data) => view.render(data));
    // view.render(data.items[0]);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
console.log(state);
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
    return (dataVideo.channelThumbnail =
      data.items[0].snippet.thumbnails.default.url);
  } catch (error) {
    console.error(error);
  }
};

loadData();
