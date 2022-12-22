class View {
  #parentElement = document.getElementById("container");
  data;
  render(data) {
    this.data = data;
    const markup = this._generateMarkup();

    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup() {
    const publishedAt =
      (Date.now() - Date.parse(new Date(this.data.snippet.publishedAt))) /
      (1000 * 60 * 60);
    const dayAt = Math.floor(publishedAt / 24);
    const hourAt = Math.floor(publishedAt);

    console.log();
    return `<div id="${this.data.id}">
              <img class="rounded-xl mb-3" src="${
                this.data.snippet.thumbnails.high.url
              }" alt="" />
              <div class="grid grid-cols-5 ">
                <div class="flex justify-center">
                  <div class="h-10 w-10 rounded-full bg-green-500">
                  <img class="h-10 w-10 rounded-full" src="${
                    this.data.abcd
                  }" alt="" />
                  </div>
                </div>
                <div class="col-span-4">
                  <h2 class="text-sm mb-3">
                    ${this.data.snippet.title}
                  </h2>
                  <p class="text-xs text-neutral-400">${""}</p>
                  <p class="text-xs text-neutral-400">
                    ${this.data.statistics.viewCount} visualizzazioni - <span>${
      dayAt >= 1
        ? `${dayAt} giorn${dayAt === 1 ? "o" : "i"} fa`
        : `${hourAt} ore fa`
    }</span>
                  </p>
                </div>
              </div>
            </div>`;
  }
}

export default new View();
