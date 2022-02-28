export default class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'document__list');
    this.element.textContent = 'this is page Component';
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
