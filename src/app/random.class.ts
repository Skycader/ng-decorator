import { printLog } from './log.decorator';

export class RandomClass {
  @printLog
  public getRandom() {
    return Math.random();
  }
}
