export {};

// Read the articlas from https://refactoring.guru/uk/design-patterns/behavioral-patterns
// Read about Chain of Responsibility, Iterator and Observer patterns
// // Read about other behavioral patterns - Command, Mediator, Memento, State, Strategy, Template Method, Visitor
//
// function excerciseA() {
//   // Imagine you are writing an application that will help users to get a loan from a bank.
//   // Use one of the Behavioral patterns to implement this requirement.
//   // Local bank branch manager can approve loan up to 10000 if requested by a customer with a credit score of 700 or more
//   // Regional bank manager can approve loan up to 50000 if requested by a customer with a credit score of 750 or more
//   // HeadQuarters bank manager can approve loan up to 100000 if requested by a customer with a credit score of 800 or more
//   // otherwise the loan is rejected
//   // create a class for the loan request, with the following properties: customerName, creditScore, requestedAmount
//   // create a class for the bank manager
//   // create a class for the local bank manager
//   // create a class for the regional bank manager
//   // connect them using one of the Behavioral patterns, and call with several different loan requests
// }
//
// excerciseA();
function exerciseA() {
  class LoanRequest {
    constructor(
      public customerName: string,
      public creditScore: number,
      public requestedAmount: number,
    ) {}
  }

  abstract class BankManager {
    protected nextManager: BankManager | null = null;

    setNextManager(manager: BankManager): BankManager {
      this.nextManager = manager;
      return manager;
    }

    abstract approveLoan(request: LoanRequest): string;
  }

  class LocalBankManager extends BankManager {
    approveLoan(request: LoanRequest): string {
      if (request.creditScore >= 700 && request.requestedAmount <= 10000) {
        return `Loan approved by Local Bank Manager for ${request.customerName}`;
      } else if (this.nextManager) {
        return this.nextManager.approveLoan(request);
      } else {
        return `Loan rejected for ${request.customerName}`;
      }
    }
  }

  class RegionalBankManager extends BankManager {
    approveLoan(request: LoanRequest): string {
      if (request.creditScore >= 750 && request.requestedAmount <= 50000) {
        return `Loan approved by Regional Bank Manager for ${request.customerName}`;
      } else if (this.nextManager) {
        return this.nextManager.approveLoan(request);
      } else {
        return `Loan rejected for ${request.customerName}`;
      }
    }
  }

  class HeadQuartersBankManager extends BankManager {
    approveLoan(request: LoanRequest): string {
      if (request.creditScore >= 800 && request.requestedAmount <= 100000) {
        return `Loan approved by HeadQuarters Bank Manager for ${request.customerName}`;
      } else if (this.nextManager) {
        return this.nextManager.approveLoan(request);
      } else {
        return `Loan rejected for ${request.customerName}`;
      }
    }
  }

  const localManager = new LocalBankManager();
  const regionalManager = new RegionalBankManager();
  const headQuartersManager = new HeadQuartersBankManager();

  localManager
    .setNextManager(regionalManager)
    .setNextManager(headQuartersManager);

  const request1 = new LoanRequest('John Doe', 750, 20000);
  const request2 = new LoanRequest('Alice Smith', 720, 30000);
  const request3 = new LoanRequest('Bob Johnson', 800, 120000);

  console.log(localManager.approveLoan(request1));
  console.log(localManager.approveLoan(request2));
  console.log(localManager.approveLoan(request3));
}

exerciseA();
