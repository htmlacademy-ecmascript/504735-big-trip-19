import { createElement } from './../render.js';

function createBoardViewTemplate() {
  return (
    `<div class="page-body__container">
    </div>`
  );
}

export default class BoardView {
  getTemplate() {
    return createBoardViewTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
