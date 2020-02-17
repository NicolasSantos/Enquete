import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../../app.service';
import { Poll } from '../../../models/Poll';
import {PollHttpService} from '../poll-http.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-poll',
  templateUrl: './cadastro-poll.component.html',
  styleUrls: ['./cadastro-poll.component.css']
})
export class CadastroPollComponent implements OnInit {

  public poll: Poll;

  constructor(private app_service: AppService, private toastr: ToastrService, private poll_service: PollHttpService, private router: Router) {
    this.poll = new Poll();
    this.poll._options.push(null);
    this.poll._options.push(null);
  }

  ngOnInit() {
    this.app_service.hideSpinner();
  }

  onSubmit(){
    this.app_service.showSpinner();
    this.poll._options.pop();

    this.poll_service.postPoll(this.poll).subscribe(res => {
      this.clearFields();
      this.app_service.hideSpinner();
      this.showSuccess(res.poll_id);
    }, err => {
      this.app_service.hideSpinner();
      this.showError('Erro ao cadastrar Enquete');
    });
  }

  public changeModelOption(event, index){
    for(let i=0; i<this.poll._options.length; i++){
      if (!this.poll._options[i]){
        if (i===0 && this.poll._options.length > 2){
          this.poll._options.splice(i + 2, this.poll._options.length - i - 1);
        } else {
          if (i > 0){
            this.poll._options.splice(i, this.poll._options.length - i - 1);
          }
        }
        return false;
      }
    }

    this.addOption();
  }

  public addOption(){
    this.poll._options[this.poll._options.length] = null;
  }

  public trackByFn(index: any, item: any) {
    return index;
  }

  public clearFields(){
    let form = <HTMLFormElement>document.getElementById('formCadastroPoll');
    form.reset();
  }

  showSuccess(poll_id: number) {
    this.toastr.success('Enquete cadastrada com sucesso','Código da Enquete: ' + poll_id);
  }

  showError(message) {
    this.toastr.error('', message);
  }
}
