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

  //Chain of Responsibility

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
          `Local bank manager approved the loan for ${loanRequest.customerName}`,
        );
      } else if (this.successor) {
        this.successor.approveLoan(loanRequest);
      } else {
        console.log(`Loan for ${loanRequest.customerName} rejected`);
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
          `Regional bank manager approved the loan for ${loanRequest.customerName}`,
        );
      } else if (this.successor) {
        this.successor.approveLoan(loanRequest);
      } else {
        console.log(`Loan for ${loanRequest.customerName} rejected`);
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
          `Headquarters bank manager approved the loan for ${loanRequest.customerName}`,
        );
      } else if (this.successor) {
        this.successor.approveLoan(loanRequest);
      } else {
        console.log(`Loan for ${loanRequest.customerName} rejected`);
      }
    }
  }

  const localManager = new LocalBankManager();
  const regionalManager = new RegionalBankManager();
  const headquartersManager = new HeadquartersBankManager();

  localManager.setSuccessor(regionalManager);
  regionalManager.setSuccessor(headquartersManager);

  // Test with different loan requests
  const loanRequest1 = new LoanRequest('John Doe', 720, 8000);
  const loanRequest2 = new LoanRequest('Alice Cooper', 780, 45000);
  const loanRequest3 = new LoanRequest('Boris Johnson', 820, 120000);

  localManager.approveLoan(loanRequest1);
  localManager.approveLoan(loanRequest2);
  localManager.approveLoan(loanRequest3);
}
excerciseA();
