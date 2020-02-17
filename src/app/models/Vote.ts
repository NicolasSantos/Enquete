export class Vote {
  private option_id: number;
  private qty: number;

  constructor () {
    this.option_id = null;
    this.qty = null;
  }

  get _option_id(): number{
    return this.option_id;
  }

  set _option_id(value: number){
    this.option_id = value;
  }

  get _qty(): number{
    return this.qty;
  }

  set _qty(value: number){
    this.qty = value;
  }
}
