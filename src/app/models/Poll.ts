import {Vote} from './Vote';
import { Option } from './Option';
import {IPoll} from '../interfaces/IPoll';

export class Poll{
  private poll_id: number;
  private poll_description: string;
  private options: Array<Option> | Array <string>;
  private views: number;
  private votes: Array<Vote>;

  constructor () {
    this.poll_id = null;
    this.poll_description = '';
    this.options = [];
    this.views = null;
    this.votes = [];
  }

  get _poll_id(): number{
    return this.poll_id;
  }

  set _poll_id(value: number){
    this.poll_id = value;
  }

  get _poll_description(): string{
    return this.poll_description;
  }

  set _poll_description(value: string){
    this.poll_description = value;
  }

  get _options(): Array<any>{
    return this.options;
  }

  set _options(value: Array<any>){
    this.options = value;
  }

  get _views(): number{
    return this.views;
  }

  set _views(value: number){
    this.views = value;
  }

  get _votes(): Array<any>{
    return this.votes;
  }

  set _votes(value: Array<any>){
    this.votes = value;
  }
}
