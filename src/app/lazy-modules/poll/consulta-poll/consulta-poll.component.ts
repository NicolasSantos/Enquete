import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';
import {ActivatedRoute} from '@angular/router';
import {Poll} from '../../../models/Poll';
import {PollHttpService} from '../poll-http.service';
import {ToastrService} from 'ngx-toastr';
import {IOption} from '../../../interfaces/IOption';
import {Option} from '../../../models/Option';

@Component({
  selector: 'app-consulta-poll',
  templateUrl: './consulta-poll.component.html',
  styleUrls: ['./consulta-poll.component.css']
})
export class ConsultaPollComponent implements OnInit {
  public id: any;
  public poll: Poll;

  constructor(private app_service: AppService, private toastr: ToastrService, private poll_service: PollHttpService, private route: ActivatedRoute) {
    this.id = null;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.getPollById();
      }
      this.app_service.hideSpinner();
    });
  }

  public getPollById(){
    this.poll_service.getPollById(this.id).subscribe(res => {
      this.poll = new Poll();
      this.poll._poll_id = res.poll_id;
      this.poll._poll_description = res.poll_description;
      this.poll._options = res.options;
      this.app_service.hideSpinner();
    }, err => {
      this.poll = null;
      this.app_service.hideSpinner();
      this.showError('Enquete não encontrada');
    });
  }

  public Vote(option: Option){
    this.app_service.showSpinner();

    this.poll_service.postVoteOptionByPoll(this.id, option).subscribe(res => {
      this.app_service.hideSpinner();
      this.showSuccess('Voto cadastrado com sucesso');
    }, err => {
      this.app_service.hideSpinner();
      this.showError('Erro ao cadastrar voto');
    });
  }

  public Search(){
    this.app_service.showSpinner();
    this.getPollById();
  }

  showSuccess(message: string) {
    this.toastr.success('', message);
  }

  showError(message: string) {
    this.toastr.error('', message);
  }
}
