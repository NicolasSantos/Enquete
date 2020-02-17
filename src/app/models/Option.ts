export class Option{
  private option_id: number;
  private option_description: string;

  constructor () {
    this.option_id = null;
    this.option_description = '';
  }

  get _option_id(): number{
    return this.option_id;
  }

  set _option_id(value: number){
    this.option_id = value;
  }

  get _option_description(): string{
    return this.option_description;
  }

  set _option_description(value: string){
    this.option_description = value;
  }
}
