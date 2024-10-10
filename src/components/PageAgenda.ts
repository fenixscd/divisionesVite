import { PaginaFilaDivision } from './PaginaFilaDivision';
import { TablaDivisiones } from '../models/TablaDivisiones';

export class PageAgenda extends HTMLElement {
  private tablaDivisiones: TablaDivisiones;
  private paginaFilaDivision: PaginaFilaDivision;

  constructor() {
    super();
    console.log('--- Constructor PageAgenda');
    const shadow = this.attachShadow({ mode: 'open' });
    this.tablaDivisiones = new TablaDivisiones(148, 105);

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: flex;
        width: 105mm;
        height: 148mm;
        box-sizing: border-box;
      }
    `;

    this.paginaFilaDivision = new PaginaFilaDivision();
    this.paginaFilaDivision.addEventListener('child-event', (event: Event) => this.handleChildEvent(event as CustomEvent));

    shadow.appendChild(style);
    shadow.appendChild(this.paginaFilaDivision);
  }

  private handleChildEvent(event: CustomEvent) {
    console.log('-- Mensaje del hijo: ', event.detail.message);
  }

  connectedCallback() {
    console.log('-- connectedCallback PageAgenda');
  }

  engancharLasVariables() {
    this.tablaDivisiones;

    (this.paginaFilaDivision as HTMLElement).style.width = "50%";
    let ancho = (this.paginaFilaDivision as HTMLElement).style.width;
    console.log('ancho ----------------------------------------------------------');
    console.log(ancho);
    console.log('----------------------------------------------------------');
  }
}