export class PaginaFilaDivision extends HTMLElement {
  private static css = `
    <style>
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        position: relative;
      }
      
      .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 15%;
        background-color: lightgreen;
      }
    </style>
  `;

  private static html = `
    <div class="bottom">Inferior</div>
  `;

  private static plantilla: HTMLTemplateElement | null = null;

  private static get_template(): HTMLTemplateElement {
    if (PaginaFilaDivision.plantilla) {
      return PaginaFilaDivision.plantilla;
    }

    const plantilla = document.createElement("template");
    const css = PaginaFilaDivision.css;
    const html = PaginaFilaDivision.html;
    plantilla.innerHTML = css + html;

    PaginaFilaDivision.plantilla = plantilla;
    return plantilla;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("Conectado ---- connectedCallback");
    let plantillaPaginaFilaDivision = PaginaFilaDivision.get_template();
    this.shadowRoot!.appendChild(plantillaPaginaFilaDivision.content.cloneNode(true));
    
    this.cargarEventListeners();
  }

  private cargarEventListeners() {
    this.shadowRoot!.querySelector('.bottom')!
      .addEventListener('click', () => this.dispatchCustomEvent());
  }

  private dispatchCustomEvent() {
    console.log("Evento disparado");
    const event = new CustomEvent('child-event', {
      detail: { message: 'Hello from CustomChild!' },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}