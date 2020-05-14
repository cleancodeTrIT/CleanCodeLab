// ❌ Bad verbs
export class Client {
  pendingOrders: boolean; //❌ boolean verbs on flag variables
  lastOrderDate: Date;
  deferPayment: boolean; //❌ boolean verbs on flag variables
  //
  // Constructor
  //
  constructor() {
    this.pendingOrders = false;
  }

  //❌ show intention
  pending(): object[] {
    return [];
  }

  //❌ good names require no comment
  // Gets the orders by status
  getOrders(status: number): object[] {
    console.log('Getting by ', status);
    return [];
  }

  //❌ return what is expected
  credit(): boolean {
    if (this.isVIP || this.deferPayment) return true;
  }

  //❌ same verb for same action
  selectLastOrder(): object {
    return {};
  }

  //❌ return what is expected
  isActive(): string {
    if (this.pendingOrders || this.isVIP) {
      return 'ACTIVE';
    } else {
      return 'INACTIVE';
    }
  }
  // ❌ vertical declaration order
  isVIP: boolean;
}
