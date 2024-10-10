import { PageAgenda } from './PageAgenda';

export class SemanaContainer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        margin: 0 auto;
        width: fit-content;
      }
      .page {
        border: 1px solid black;
      }
    `;

    shadow.appendChild(style);
  }

  connectedCallback() {
    const pagesCount = parseInt(this.getAttribute('pages') || '1');
    for (let i = 0; i < pagesCount; i++) {
      const page = new PageAgenda();
      page.classList.add('page');
      this.shadowRoot!.appendChild(page);
    }
  }
}