// x Assignation?

// 1 Assignation

// 1.x Assignation.Binary?

// 1.1 Assignation.Binary

// 1.1.x Assignation.Binary.Boolean?

// 1.1.1 Assignation.Binary.Boolean
const LEGAL_AGE = 18;
let age = 16;
const isAdult = age > LEGAL_AGE;
console.log(isAdult);

// 1.1.0 Assignation.Binary.Not.Boolean
let testPassed = true;
const reportColor = testPassed ? 'green' : 'red';
console.log(reportColor);

// 1.0 Assignation.Not.Binary
const STATUS_COLORS = [
  {
    key: 'Active',
    value: 'green',
  },
  {
    key: 'Cancelled',
    value: 'gray',
  },
  {
    key: 'Delayed',
    value: 'red',
  },
];
let projectStatus = 'Active';
let statusColor = STATUS_COLORS.find(sc => sc.key === projectStatus);
let projectStatusColor = statusColor.value;

// 0 Not.Assignation

// 0.x Not.Assignation.Precondition?

// 0.1 Not.Assignation.Precondition
function sigUpToDrivingSchool(isTooYoung, hasPayed, identification) {
  if (isTooYoung) return;
  if (!hasPayed) return;
  if (identification === null) throw Error('No Id');
  console.log(`${identification} is admitted`);
}

// 0.0 Not.Assignation.Not.Precondition

// 0.0.x Not.Assignation.Not.Precondition.BinaryAction?

// 0.0.1 Not.Assignation.Not.Precondition.BinaryAction
let stock = 5;
let ordered = 6;
if (stock >= ordered) {
  console.log(`Sent ${ordered} to client`);
  console.log(`Remains ${stock - ordered} on the store`);
} else {
  console.log(`Sent ${stock} to client`);
  console.log(`Ask for ${ordered - stock} to the provider`);
}

// 0.0.0 Not.Assignation.Not.Precondition.Not.BinaryAction

// 0.0.0.x Not.Assignation.Not.Precondition.Not.BinaryAction.Nested?

// 0.0.0.1 Not.Assignation.Not.Precondition.Not.BinaryAction.Nested
function printRealStateSellingContract() {
  if (isResidential()) {
    printResidentialContract();
  } else {
    printNonResidentialContract();
  }
}
function printResidentialContract() {
  console.log('House or flat to individuals');
}
function printNonResidentialContract() {
  if (isForInvestingTrust()) {
    printInvestingTrustContract();
  } else {
    printIndustrialContract();
  }
}
function printInvestingTrustContract() {
  console.log('Residential property to an investing trust');
}
function printIndustrialContract() {
  console.log('Industrial property to a company');
}
function isResidential() {
  return true;
}
function isForInvestingTrust() {
  return true;
}

// 0.0.0.0 Not.Assignation.Not.Precondition.Not.BinaryAction.Not.Nested

// 0.0.0.0.x StableAndFew?

// 0.0.0.0.1 Not.Assignation.Not.Precondition.Not.BinaryAction.Not.Nested.StableAndFew
function processTrip(tripStatus) {
  switch (tripStatus) {
    case 'on time':
      console.log('Open boarding');
      break;
    case 'delayed':
      console.log('Inform passengers');
      break;
    case 'cancelled':
      console.log('Refund money');
      break;

    default:
      throw new Error('Invalid status');
  }
}

// 0.0.0.0.0 Not.Assignation.Not.Precondition.Not.BinaryAction.Not.Nested.Not.StableAndFew

// 0.0.0.0.0.x Not.Assignation.Not.Precondition.Not.BinaryAction.Not.Nested.Not.StableAndFew.Parametrizable?

// 0.0.0.0.0.1 Not.Assignation.Not.Precondition.Not.BinaryAction.Not.Nested.Not.StableAndFew.Parametrizable

// -> Look up table and logic

// 0.0.0.0.0.0 Not.Assignation.Not.Precondition.Not.BinaryAction.Not.Nested.Not.StableAndFew.Not.Parametrizable

// -> Strategy pattern
