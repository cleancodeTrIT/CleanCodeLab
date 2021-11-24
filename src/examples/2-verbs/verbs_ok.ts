// ✔️ Bad verbs
export class Client {
  hasPendingOrders: boolean; //✔️ boolean verbs on flag variables
  lastOrderDate: Date;
  canDeferPayment: boolean; //✔️ boolean verbs on flag variables
  // ✔️ vertical declaration order
  isVIP: boolean;
  //
  // Constructor
  //
  constructor() {
    this.hasPendingOrders = false;
  }

  // ✔️ show intention
  getPendingOrders(): object[] {
    return [];
  }

  //✔️ good names require no comment
  // Gets the orders by status
  getOrdersBy(status: number): object[] {
    console.log('Getting by ', status);
    return [];
  }

  // ✔️ return what is expected
  hasCredit(): boolean {
    if (this.isVIP || this.canDeferPayment) return true;
  }

  // ✔️ same verb for same action
  getLastOrder(): object {
    return {};
  }

  // ✔️ return what is expected
  getActiveStatus(): string {
    if (this.hasPendingOrders || this.isVIP) {
      return 'ACTIVE';
    } else {
      return 'INACTIVE';
    }
  }
}
