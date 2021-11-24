const ACTIVE = 2;
// ✔️ Bad nouns
export class Client {
  registeredOn: Date; // ✔️ complete pronounceable
  name: string; // ✔️ redundant
  balance: number; // ✔️ no technical prefix
  status = ACTIVE; // ✔️ no magic number
  numberOfSuppliedOrders: number; // ✔️ same vocabulary well spelled
  orders: object[]; // ✔️ redundant
  processOrders(): void {
    this.orders.forEach(order => {
      console.log('Start processing');
      console.log('processing things');
      console.log('Ended with' + order); // ✔️ avoid mental mapping
    });
  }
}
