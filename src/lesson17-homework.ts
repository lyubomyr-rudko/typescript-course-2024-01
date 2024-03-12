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
      public requestedAmount: number,
      public creditScore: number,
    ) {}
  }

  abstract class Bank {
    private nextBank?: Bank;

    constructor(
      private name: string,
      private maxRequestedAmount: number,
      private minCreditScore: number,
    ) {}

    setNextBank(bank: Bank) {
      this.nextBank = bank;

      return bank;
    }

    handleRequest(request: LoanRequest) {
      const { creditScore, requestedAmount, customerName } = request;
      const { maxRequestedAmount, minCreditScore, nextBank, name } = this;
      const canHandle =
        creditScore >= minCreditScore && requestedAmount <= maxRequestedAmount;

      canHandle
        ? console.log(
            `Dear ${customerName}, Your loan request for ${requestedAmount} was approved by ${name} bank.`,
          )
        : nextBank
          ? nextBank.handleRequest(request)
          : console.log(
              `Dear ${customerName}, Your loan request was rejected.`,
            );
    }
  }

  class LocalBank extends Bank {
    constructor() {
      super('Local', 10000, 700);
    }
  }

  class RegionalBank extends Bank {
    constructor() {
      super('Regional', 50000, 750);
    }
  }

  class HeadQuartersBank extends Bank {
    constructor() {
      super('HeadQuarters', 100000, 800);
    }
  }

  const request1 = new LoanRequest('Donald', 5000, 600);
  const request2 = new LoanRequest('Teresa', 15000, 750);
  const request3 = new LoanRequest('Wesley', 60000, 750);
  const request4 = new LoanRequest('Joe', 75000, 850);
  const request5 = new LoanRequest('Jill', 7000, 700);

  const localBank = new LocalBank();
  const regionalBank = new RegionalBank();
  const headQuartersBank = new HeadQuartersBank();

  localBank.setNextBank(regionalBank).setNextBank(headQuartersBank);

  localBank.handleRequest(request1);
  localBank.handleRequest(request2);
  localBank.handleRequest(request3);
  localBank.handleRequest(request4);
  localBank.handleRequest(request5);
}

excerciseA();
