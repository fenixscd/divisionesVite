import './style.css';
import { PaginaDivision } from './components/PaginaDivision';
import { PaginaFilaDivision } from './components/PaginaFilaDivision';
import { PageAgenda } from './components/PageAgenda';
import { SemanaContainer } from './components/SemanaContainer';

customElements.define('pagina-division', PaginaDivision);
customElements.define('pagina-fila-division', PaginaFilaDivision);
customElements.define('page-agenda', PageAgenda);
customElements.define('semana-container', SemanaContainer);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Agenda App</h1>
    <semana-container pages="2"></semana-container>
  </div>
`;