export class CounterService{
  counterActive: number = 0;
  counterInactive: number = 0;

  incrementActiveCounter (){
    this.counterActive++;
    console.log('Active: ' + this.counterActive);
  }

  incrementInactiveCounter (){
    this.counterInactive++;
    console.log('Inactive: ' + this.counterInactive);
  }

}
