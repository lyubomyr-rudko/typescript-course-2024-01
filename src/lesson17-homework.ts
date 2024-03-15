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

  // Use Chain of Command,
  interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: number): number;
  }

  abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | undefined;

    public setNext(handler: Handler): Handler {
      this.nextHandler = handler;

      return handler;
    }

    public handle(request: number): number {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
      return 0;
    }
  }

  //
  type TManager = {
    handle(value: number): number;
  };
  // create a class for the bank manager
  class BankManagerHead extends AbstractHandler implements TManager {
    public handle(request: number): number {
      if (request >= 800) {
        return 100_000;
      }
      return super.handle(request);
    }
  }

  // create a class for the regional bank manager
  class BankManagerRegional extends AbstractHandler implements TManager {
    public handle(request: number): number {
      if (request >= 750) {
        if (request < 800) return 50_000;
        return super.handle(request);
      }
      return 0;
    }
  }

  // create a class for the local bank manager
  class BankManagerLocal extends AbstractHandler implements TManager {
    public handle(request: number): number {
      if (request >= 700) {
        if (request < 750) return 10_000;
        return super.handle(request);
      }
      return 0;
    }
  }

  //
  const managerBankHead: BankManagerHead = new BankManagerHead();
  const managerRegional: BankManagerRegional = new BankManagerRegional();
  const managerLocal: BankManagerLocal = new BankManagerLocal();

  managerLocal.setNext(managerRegional).setNext(managerBankHead);

  // connect them using one of the Behavioral patterns, and call with several different loan requests
  //
  class Client {
    customerName;
    creditScore;
    requestedAmount;

    constructor(
      customerName: string,
      creditScore: number,
      requestedAmount?: number,
    ) {
      this.customerName = customerName;
      this.creditScore = creditScore;
      this.requestedAmount = requestedAmount;
    }

    getCredit(handler: Handler): void {
      const credit: number = handler.handle(this.creditScore);
      this.requestedAmount = credit;
      console.log(
        `Dear ${this.customerName}, you can get credit limit as: ${this.requestedAmount}`,
      );
    }
  }

  const client1 = new Client('Stan', 800);
  const client2 = new Client('Olga', 700);
  const client3 = new Client('Alex', 750);
  const client4 = new Client('Artur', 50);

  client1.getCredit(managerLocal);
  client2.getCredit(managerLocal);
  client3.getCredit(managerLocal);
  client4.getCredit(managerLocal);
}

excerciseA();
