import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPollComponent } from './cadastro-poll/cadastro-poll.component';
import {PollHttpService} from './poll-http.service';
import {pollRouter} from './poll-router-config';
import {FormsModule} from '@angular/forms';
import { ConsultaPollComponent } from './consulta-poll/consulta-poll.component';
import { EstatisticasPollComponent } from './estatisticas-poll/estatisticas-poll.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule, pollRouter, FormsModule, ChartsModule
  ],
  declarations: [CadastroPollComponent, ConsultaPollComponent, EstatisticasPollComponent],
  providers: [PollHttpService]
})
export class PollModule { }
