export class PaginaDivision extends HTMLElement {
  private static plantilla: HTMLTemplateElement | null = null;

  private static get_template(): HTMLTemplateElement {
    if (PaginaDivision.plantilla) {
      return PaginaDivision.plantilla;
    }

    const plantilla = document.createElement("template");
    
    const css = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          position: relative;
        }
        
        .right {
          position: absolute;
          right: 0;
          top: 0%;
          bottom: 0%;
          width: 25%;
          background-color: lightgoldenrodyellow;
        }
      </style>
    `;
    const html = `
      <div class="right">Derecha</div>
    `;
    plantilla.innerHTML = css + html;

    PaginaDivision.plantilla = plantilla;
    return plantilla;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("Conectado");
    const plantilla = PaginaDivision.get_template();
    this.shadowRoot!.appendChild(plantilla.content.cloneNode(true));

    this.cargarEventListeners();
  }

  private cargarEventListeners() {
    this.shadowRoot!.querySelector('.right')!
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