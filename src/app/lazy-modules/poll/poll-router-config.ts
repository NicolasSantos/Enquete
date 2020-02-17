
import {RouterModule, Routes} from '@angular/router';
import {CadastroPollComponent} from './cadastro-poll/cadastro-poll.component';
import {ConsultaPollComponent} from './consulta-poll/consulta-poll.component';
import {EstatisticasPollComponent} from './estatisticas-poll/estatisticas-poll.component';


const pollRouterConfig: Routes = [
  {
    path: 'cadastro',
    component: CadastroPollComponent
  },
  {
    path: 'consulta',
    component: ConsultaPollComponent
  },
  {
    path: ':id/consulta',
    component: ConsultaPollComponent
  },
  {
    path: 'estatisticas',
    component: EstatisticasPollComponent
  },
  {
    path: ':id/estatisticas',
    component: EstatisticasPollComponent
  }
];

export const pollRouter = RouterModule.forChild(pollRouterConfig);
