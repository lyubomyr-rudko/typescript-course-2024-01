export {};

// Read the articles from https://refactoring.guru/uk/design-patterns/behavioral-patterns
// Read about Chain of Responsibility, Iterator and Observer patterns
// Read about other behavioral patterns - Command, Mediator, Memento, State, Strategy, Template Method, Visitor

function exerciseA() {
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
    protected someBank?: BankManager;

    setSomeBank(someBank: BankManager) {
      this.someBank = someBank;
    }

    abstract processLoanRequest(loanRequest: LoanRequest): void;
  }

  class LocalBankManager extends BankManager {
    processLoanRequest(loanRequest: LoanRequest): void {
      if (
        loanRequest.creditScore >= 700 &&
        loanRequest.requestedAmount <= 10000
      ) {
        console.log(
          `Local Bank Manager approved the loan for ${loanRequest.customerName}`,
        );
      } else if (this.someBank) {
        this.someBank.processLoanRequest(loanRequest);
      }
    }
  }

  class RegionalBankManager extends BankManager {
    processLoanRequest(loanRequest: LoanRequest): void {
      if (
        loanRequest.creditScore >= 750 &&
        loanRequest.requestedAmount <= 50000
      ) {
        console.log(
          `Regional Bank Manager approved the loan for ${loanRequest.customerName}`,
        );
      } else if (this.someBank) {
        this.someBank.processLoanRequest(loanRequest);
      }
    }
  }

  class HeadQuartersBankManager extends BankManager {
    processLoanRequest(loanRequest: LoanRequest): void {
      if (
        loanRequest.creditScore >= 800 &&
        loanRequest.requestedAmount <= 100000
      ) {
        console.log(
          `HeadQuarters Bank Manager approved the loan for ${loanRequest.customerName}`,
        );
      } else {
        console.log(
          `Sorry the loan request for ${loanRequest.customerName} cannot be approved`,
        );
      }
    }
  }

  const localManager = new LocalBankManager();
  const regionalManager = new RegionalBankManager();
  const headquartersManager = new HeadQuartersBankManager();

  localManager.setSomeBank(regionalManager);
  regionalManager.setSomeBank(headquartersManager);

  const loanRequest1: LoanRequest = {
    customerName: 'Got1',
    creditScore: 710,
    requestedAmount: 9500,
  };

  const loanRequest2: LoanRequest = {
    customerName: 'Got2',
    creditScore: 755,
    requestedAmount: 55000,
  };

  const loanRequest3: LoanRequest = {
    customerName: 'Got3',
    creditScore: 800,
    requestedAmount: 80000,
  };

  localManager.processLoanRequest(loanRequest1);
  localManager.processLoanRequest(loanRequest2);
  localManager.processLoanRequest(loanRequest3);
}

exerciseA();
