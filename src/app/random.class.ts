import { printLog } from './log.decorator';

export class RandomClass {
  @printLog('Method has returned:')
  public getRandom() {
    return Math.random();
  }
}
