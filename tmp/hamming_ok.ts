export class HammingCalculator {
  getDistance(source: string, target: string): number {
    this.checkGuards(source, target);
    this.writeInfo(`Calculating difference for ${source} - ${target}`);
    const distance = this.calculateDistance(source, target);
    this.writeInfo(`Calculated difference ${distance}`);
    return distance;
  }

  private checkGuards(source: string, target: string): void {
    if (this.areNullInputs(source, target)) {
      const errorNull = 'null not allowed';
      this.writeError(errorNull);
      throw errorNull;
    }
    if (this.haveDifferentLengths(source, target)) {
      const warnInvalid = 'invalid strings';
      this.writeWarning(warnInvalid);
      throw warnInvalid;
    }
  }
  private areNullInputs(source: string, target: string): boolean {
    return source === null || target === null;
  }
  private haveDifferentLengths(source: string, target: string): boolean {
    return source.length !== target.length;
  }
  private calculateDistance(source: string, target: string): number {
    const NULL_DISTANCE = 0;
    if (this.isEmpty(source)) {
      return NULL_DISTANCE;
    }
    const START = 0;
    let distance = NULL_DISTANCE;
    for (let i = START; i < source.length; i++) {
      if (this.isDifferent(source[i], target[i])) {
        distance++;
      }
    }
    return distance;
  }
  private isEmpty(source: string): boolean {
    const EMPTY = 0;
    return source.length === EMPTY;
  }
  private isDifferent(source: string, target: string): boolean {
    return source !== target;
  }

  private writeInfo(message: string): void {
    console.log(message);
  }
  private writeWarning(message: string): void {
    console.warn(message);
  }
  private writeError(message: string): void {
    console.error(message);
  }
}
