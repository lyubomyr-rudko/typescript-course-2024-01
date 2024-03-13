export {};

// Read the articlas from https://refactoring.guru/uk/design-patterns/behavioral-patterns
// Read about Chain of Responsibility, Iterator and Observer patterns
// Read about other behavioral patterns - Command, Mediator, Memento, State, Strategy, Template Method, Visitor

function excerciseA() {
  // Imagine you are writing an application that will help users to get a loan from a bank.
  // Use one of the Behavioral patterns to implement this requirement.
  // Local bank branch manager can approve loan up to 10000 if requested by a customer with a credit score of 700 or more
  // Regional bank manager can approve loan up to 50000 if requested by a customer with a credit score of 750 or more
  // HeadQuarters bank manager can approve loan up to 100000 if requested by a customer with a credit score of 800 or more
  // otherwise the loan is rejected
  // create a class for the loan request, with the following properties: customerName, creditScore, requestedAmount
  // create a class for the bank manager
  // create a class for the local bank manager
  // create a class for the regional bank manager
  // connect them using one of the Behavioral patterns, and call with several different loan requests

  class LoanRequest {
    constructor(
      public customerName: string,
      public creditScore: number,
      public requestedAmount: number,
    ) {}
  }

  interface BankManager {
    setNext(manager: BankManager): void;
    approveLoan(request: LoanRequest): boolean;
  }

  abstract class BaseBankManager implements BankManager {
    private nextManager?: BankManager;

    setNext(manager: BankManager): void {
      this.nextManager = manager;
    }

    approveLoan(request: LoanRequest): boolean {
      if (this.canApproveLoan(request)) {
        console.log(`Loan approved by ${this.constructor.name}`);
        return true;
      } else if (this.nextManager) {
        console.log(
          `Forwarding request to ${this.nextManager.constructor.name}`,
        );
        return this.nextManager.approveLoan(request);
      } else {
        console.log('No manager can approve this loan.');
        return false;
      }
    }

    protected abstract canApproveLoan(request: LoanRequest): boolean;
  }

  class LocalBankManager extends BaseBankManager {
    protected canApproveLoan(request: LoanRequest): boolean {
      return request.requestedAmount <= 10000 && request.creditScore >= 700;
    }
  }

  class RegionalBankManager extends BaseBankManager {
    protected canApproveLoan(request: LoanRequest): boolean {
      return request.requestedAmount <= 50000 && request.creditScore >= 750;
    }
  }

  class HeadQuartersBankManager extends BaseBankManager {
    protected canApproveLoan(request: LoanRequest): boolean {
      return request.requestedAmount <= 100000 && request.creditScore >= 800;
    }
  }

  const localManager = new LocalBankManager();
  const regionalManager = new RegionalBankManager();
  const headquartersManager = new HeadQuartersBankManager();

  localManager.setNext(regionalManager);
  regionalManager.setNext(headquartersManager);

  const requests: LoanRequest[] = [
    new LoanRequest('Alice', 720, 80000),
    new LoanRequest('Bob', 760, 20000),
    new LoanRequest('Charlie', 790, 5000),
  ];

  requests.forEach((request) => {
    console.log(`Processing loan request for ${request.customerName}`);
    localManager.approveLoan(request);
  });
}

excerciseA();
