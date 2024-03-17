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
  class LoanRequest {
    constructor(
      public customerName: string,
      public creditScore: number,
      public requestedAmount: number,
    ) {}
  }

  abstract class BankAnswer {
    constructor(
      public maxRequest: number,
      public minScore: number,
    ) {}
    private nextHandler?: BankAnswer;
    public setNext(handler: BankAnswer): BankAnswer {
      this.nextHandler = handler;
      return handler;
    }

    public handle(request: LoanRequest): string | void {
      const answer: boolean =
        request.creditScore >= this.minScore &&
        request.requestedAmount <= this.maxRequest;

      if (answer) {
        console.log(
          ` ${request.customerName} can have credit for ${request.requestedAmount}`,
        );
      } else if (!answer) {
        console.log(
          ` ${request.customerName} can't have credit for ${request.requestedAmount}`,
        );
      } else if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
    }
  }
  // create a class for the bank manager
  class LocalManager extends BankAnswer {
    constructor() {
      super(10000, 700);
    }
  }
  // create a class for the local bank manager
  class RegionalManager extends BankAnswer {
    constructor() {
      super(50000, 750);
    }
  }
  // create a class for the regional bank manager
  class HeadManager extends BankAnswer {
    constructor() {
      super(100000, 800);
    }
  }
  const localManager = new LocalManager();
  const regionalManager = new RegionalManager();

  const headManager = new HeadManager();
  localManager.setNext(regionalManager).setNext(headManager);
  const request1 = new LoanRequest('Oleg', 750, 150000);
  const request2 = new LoanRequest('Inna', 550, 1500);
  const request3 = new LoanRequest('Igor', 850, 2000);

  localManager.handle(request1);
  localManager.handle(request2);
  localManager.handle(request3);

  // connect them using one of the Behavioral patterns, and call with several different loan requests
}

excerciseA();
