class View {
  _parentElement = document.getElementById("container");
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    // this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup() {
    return `<div id="${this._data.id}">
              <img class="rounded-xl mb-3" src="${this._data.imageUrl}" alt="" />
              <div class="grid grid-cols-5 ">
                <div class="flex justify-center">
                  <div class="h-8 w-8 rounded-full bg-green-500"></div>
                </div>
                <div class="col-span-4">
                  <h2 class="text-sm mb-3">
                    ${this._data.title}
                  </h2>
                  <p class="text-xs text-neutral-400">${this._data.channelTitle}</p>
                  <p class="text-xs text-neutral-400">
                    ${this._data.viewCount} visualizzazioni - <span>${this._data.publishedAt}</span>
                  </p>
                </div>
              </div>
            </div>`;
  }
}

export default new View();
