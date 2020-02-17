import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';
import {Poll} from '../../../models/Poll';
import {Option} from '../../../models/Option';
import {ToastrService} from 'ngx-toastr';
import {PollHttpService} from '../poll-http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-estatisticas-poll',
  templateUrl: './estatisticas-poll.component.html',
  styleUrls: ['./estatisticas-poll.component.css']
})
export class EstatisticasPollComponent implements OnInit {

  public id: any;
  public poll: Poll;
  public list_data_chart: Array<number>;
  public list_label_chart: Array<string>;
  public total_votes: number;
  public message_no_votes: string;

  constructor(private app_service: AppService, private toastr: ToastrService, private poll_service: PollHttpService, private route: ActivatedRoute) {
    this.id = null;
    this.list_data_chart = [];
    this.list_label_chart = [];
    this.message_no_votes = '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.getPollStatsById();
      }
      this.app_service.hideSpinner();
    });
  }

  public getPollStatsById(){
    this.total_votes = 0;
    this.message_no_votes = '';
    this.list_data_chart = [];
    this.list_label_chart = [];

    this.poll_service.getPollById(this.id).subscribe(res => {
      this.poll = new Poll();
      this.poll._poll_id = res.poll_id;
      this.poll._poll_description = res.poll_description;
      this.poll._options = res.options;

      this.poll_service.getPollStatsById(this.id).subscribe(response => {
        this.poll._views = response.views;
        this.poll._votes = response.votes;

        for (let i=0; i<this.poll._options.length; i++){
          this.total_votes += this.poll._votes[i].qty;
          this.list_label_chart.push(this.poll._options[i].option_description);
        }

        for (let i=0; i<this.poll._options.length; i++){
          this.list_data_chart.push(parseFloat((100 * this.poll._votes[i].qty / this.total_votes).toFixed(2)));
        }

        if (this.total_votes == 0){
          this.message_no_votes = 'Nenhum voto registrado para esta enquete';
        }
        this.app_service.hideSpinner();
      }, err => {
        this.poll = null;
        this.app_service.hideSpinner();
        this.showError('Enquete não encontrada');
      });
    }, err => {
      this.poll = null;
      this.app_service.hideSpinner();
      this.showError('Enquete não encontrada');
    });
  }

  public Search(){
    this.app_service.showSpinner();
    this.getPollStatsById();
  }

  showSuccess(message: string) {
    this.toastr.success('', message);
  }

  showError(message: string) {
    this.toastr.error('', message);
  }
}
