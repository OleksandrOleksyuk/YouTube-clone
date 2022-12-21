class View {
  #parentElement = document.getElementById("container");
  #data;
  render(data) {
    this.#data = data;
    const markup = this._generateMarkup();

    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup() {
    console.log(this.#data);
    console.log(this.#data.abcd);
    console.log(this.#data);
    return `<div id="${this.#data.id}">
              <img class="rounded-xl mb-3" src="${
                this.#data.imageUrl
              }" alt="" />
              <div class="grid grid-cols-5 ">
                <div class="flex justify-center">
                  <div class="h-8 w-8 rounded-full bg-green-500">
                  <img src="${this.#data.abcd}" alt="" />
                  </div>
                </div>
                <div class="col-span-4">
                  <h2 class="text-sm mb-3">
                    ${this.#data.title}
                  </h2>
                  <p class="text-xs text-neutral-400">${
                    this.#data.channelTitle
                  }</p>
                  <p class="text-xs text-neutral-400">
                    ${this.#data.viewCount} visualizzazioni - <span>${
      this.#data.publishedAt
    }</span>
                  </p>
                </div>
              </div>
            </div>`;
  }
}

export default new View();
