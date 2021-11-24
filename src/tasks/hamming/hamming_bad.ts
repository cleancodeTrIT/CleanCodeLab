/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-depth */
// ❌
export class HammingCalculator {
  compare(a: string, b: string): number | string {
    if (a != null && b != null) {
      if (a.length === b.length) {
        this.writeLog(`Calculating difference for ${a} - ${b}`, 'info');
        let result = 0;
        if (a.length > 0 || b.length > 0) {
          for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
              result++;
            }
          }
        }
        this.writeLog(`Calculated difference ${result}`, 'info');
        return result;
      } else {
        const warnInvalid = 'invalid strings';
        this.writeLog(warnInvalid, 'warning');
        return warnInvalid;
      }
    } else {
      const errorNull = 'null not allowed';
      this.writeLog(errorNull, 'error');
      return errorNull;
    }
  }
  writeLog(message: string, category: string): void {
    switch (category) {
      case 'info':
        console.log(message);
        break;
      case 'warning':
        console.warn(message);
        break;
      case 'error':
        console.error(message);
        break;
    }
  }
}
