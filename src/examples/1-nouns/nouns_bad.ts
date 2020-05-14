/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable no-magic-numbers */
// ❌ Bad nouns
export class client {
  regOn: Date; // ❌ complete pronounceable
  clientName: string; // ❌ redundant
  intBalance: number; // ❌ no technical prefix
  status = 2; // ❌ no magic number
  numberOfSupliedRequests: number; // ❌ same vocabulary
  clientOrders: object[]; // ❌ redundant
  processOrders(): void {
    this.clientOrders.forEach(o => {
      console.log('Start processing');
      console.log('processing things');
      console.log('Ended with' + o); // ❌ avoid mental mapping
    });
  }
}
