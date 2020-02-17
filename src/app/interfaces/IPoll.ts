import {IOption} from './IOption';
import {IVote} from './IVote';

export interface IPoll{
  poll_id: number;
  poll_description: string;
  options: Array<IOption> | Array <string>;
  views: number;
  votes: Array<IVote>
}
