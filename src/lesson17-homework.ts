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

  abstract class BankManager {
    protected successor: BankManager | null = null;

    setSuccessor(successor: BankManager): void {
      this.successor = successor;
    }

    abstract approveLoan(loanRequest: LoanRequest): void;
  }

  class LocalBankManager extends BankManager {
    approveLoan(loanRequest: LoanRequest): void {
      if (
        loanRequest.creditScore >= 700 &&
        loanRequest.requestedAmount <= 10000
      ) {
        console.log(
          `Loan approved by Local Bank Manager for ${loanRequest.customerName}`,
        );
      } else if (this.successor) {
        this.successor.approveLoan(loanRequest);
      } else {
        console.log(`Loan rejected for ${loanRequest.customerName}`);
      }
    }
  }

  class RegionalBankManager extends BankManager {
    approveLoan(loanRequest: LoanRequest): void {
      if (
        loanRequest.creditScore >= 750 &&
        loanRequest.requestedAmount <= 50000
      ) {
        console.log(
          `Loan approved by Regional Bank Manager for ${loanRequest.customerName}`,
        );
      } else if (this.successor) {
        this.successor.approveLoan(loanRequest);
      } else {
        console.log(`Loan rejected for ${loanRequest.customerName}`);
      }
    }
  }

  class HeadquartersBankManager extends BankManager {
    approveLoan(loanRequest: LoanRequest): void {
      if (
        loanRequest.creditScore >= 800 &&
        loanRequest.requestedAmount <= 100000
      ) {
        console.log(
          `Loan approved by HeadQuarters Bank Manager for ${loanRequest.customerName}`,
        );
      } else if (this.successor) {
        this.successor.approveLoan(loanRequest);
      } else {
        console.log(`Loan rejected for ${loanRequest.customerName}`);
      }
    }
  }

  const localManager = new LocalBankManager();
  const regionalManager = new RegionalBankManager();
  const headquartersManager = new HeadquartersBankManager();

  localManager.setSuccessor(regionalManager);
  regionalManager.setSuccessor(headquartersManager);

  const loanRequest1 = new LoanRequest('John', 720, 8000);
  const loanRequest2 = new LoanRequest('Alice', 780, 45000);
  const loanRequest3 = new LoanRequest('Ben', 820, 120000);
  const loanRequest4 = new LoanRequest('Jack', 790, 5000);
  const loanRequest5 = new LoanRequest('Albert', 920, 200000);
  const loanRequest6 = new LoanRequest('Boris', 900, 90000);

  localManager.approveLoan(loanRequest1);
  localManager.approveLoan(loanRequest2);
  localManager.approveLoan(loanRequest3);
  localManager.approveLoan(loanRequest4);
  localManager.approveLoan(loanRequest5);
  localManager.approveLoan(loanRequest6);
}
excerciseA();
